import { AppError } from "./AppError";

export class PlatoYaExisteError extends AppError {
  constructor() {
    super("El plato ya existe en el pedido", 400);
  }
}
