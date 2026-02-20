import { Mesa } from "../../domain/entities/Mesa";

export class RegistrarMesaUseCase {
  private mesas: Mesa[] = [];

  public ejecutar(numero: number): Mesa {
    const mesa = new Mesa(numero);
    this.mesas.push(mesa);
    return mesa;
  }

  public obtenerMesas(): Mesa[] {
    return this.mesas;
  }
}