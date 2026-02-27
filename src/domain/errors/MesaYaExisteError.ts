import { AppError } from "./AppError";

export class MesaYaExisteError extends AppError {
  constructor() {
    super("La mesa ya está registrada en el sistema", 400);
  }
}
