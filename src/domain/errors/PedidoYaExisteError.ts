import { AppError } from "./AppError";

export class PedidoYaExisteError extends AppError {
  constructor() {
    super("El pedido ya está registrado en el sistema", 400);
  }
}
