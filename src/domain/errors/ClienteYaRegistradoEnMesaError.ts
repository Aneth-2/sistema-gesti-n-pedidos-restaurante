import { AppError } from "./AppError";

export class ClienteYaRegistradoEnMesaError extends AppError {
  constructor() {
    super("El cliente ya está registrado en la mesa", 400);
  }
}
