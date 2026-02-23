import { IncomingMessage, ServerResponse } from "http";
import { RegistrarMesaUseCase } from "../../application/useCases/RegistrarMesa";

export class MesaController {
  constructor(private registrarMesaUseCase: RegistrarMesaUseCase) {}

  public crearMesa(req: IncomingMessage, res: ServerResponse) {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { numero } = JSON.parse(body);

      const mesa = this.registrarMesaUseCase.ejecutar(numero);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "Mesa creada correctamente",
        numero: mesa.getNumero()
      }));
    });
  }

  public listarMesas(res: ServerResponse) {
    const mesas = this.registrarMesaUseCase.obtenerMesas();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(mesas.map(m => ({
      numero: m.getNumero(),
      estado: m.obtenerEstado()
    }))));
  }
}