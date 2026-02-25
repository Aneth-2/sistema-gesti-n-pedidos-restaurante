import { IncomingMessage, ServerResponse } from "http";
import { CrearPedidoUseCase } from "../../application/useCases/CrearPedido";
import { AgregarPlatoUseCase } from "../../application/useCases/AgregarPlato";
import { PedidoRepository } from "../../domain/repositories/PedidoRepo";

export class PedidoController {

  constructor(
    private crearPedidoUseCase: CrearPedidoUseCase,
    private agregarPlatoUseCase: AgregarPlatoUseCase,
    private pedidoRepository: PedidoRepository
  ) {}

  public crearPedido(req: IncomingMessage, res: ServerResponse) {
    let body = "";

    req.on("data", chunk => body += chunk.toString());

    req.on("end", () => {
      try {
        const { clienteId, pedidoId } = JSON.parse(body);

        if (!clienteId || !pedidoId) {
          throw new Error("clienteId y pedidoId son obligatorios");
        }

        const pedido = this.crearPedidoUseCase.ejecutar(
          clienteId,
          pedidoId
        );

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          message: "Pedido creado",
          id: pedido.getId()
        }));

      } catch (error: any) {
        this.handleError(res, error);
      }
    });
  }

  public agregarPlato(req: IncomingMessage, res: ServerResponse) {
    let body = "";

    req.on("data", chunk => body += chunk.toString());

    req.on("end", () => {
      try {
        const { pedidoId, platoId, nombre, precio } = JSON.parse(body);

        if (!pedidoId || !platoId || !nombre || !precio) {
          throw new Error("Datos incompletos");
        }

        const pedido = this.pedidoRepository.findById(pedidoId);

        if (!pedido) {
          throw new Error("Pedido no encontrado");
        }

        this.agregarPlatoUseCase.ejecutar(
          pedido,
          platoId,
          nombre,
          precio
        );

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          message: "Plato agregado correctamente"
        }));

      } catch (error: any) {
        this.handleError(res, error);
      }
    });
  }

  private handleError(res: ServerResponse, error: Error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      error: error.message
    }));
  }
}
