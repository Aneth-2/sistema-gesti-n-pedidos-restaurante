import { IncomingMessage, ServerResponse } from "http";
import { MesaController } from "../controllers/MesaController";
import { PedidoController } from "../controllers/PedidoController";

export function createRouter(
  mesaController: MesaController,
  pedidoController: PedidoController
) {
  return (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "POST" && req.url === "/mesas") {
      return mesaController.crearMesa(req, res);
    }

    if (req.method === "GET" && req.url === "/mesas") {
      return mesaController.listarMesas(res);
    }

    if (req.method === "POST" && req.url === "/pedidos") {
      return pedidoController.crearPedido(req, res);
    }

    if (req.method === "POST" && req.url === "/platos") {
      return pedidoController.agregarPlato(req, res);
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  };
}
