import { IncomingMessage, ServerResponse } from "http";
import { MesaController } from "../controllers/MesaController";

export function createRouter(mesaController: MesaController) {
  return (req: IncomingMessage, res: ServerResponse) => {

    if (req.method === "POST" && req.url === "/mesas") {
      return mesaController.crearMesa(req, res);
    }

    if (req.method === "GET" && req.url === "/mesas") {
      return mesaController.listarMesas(res);
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  };
}