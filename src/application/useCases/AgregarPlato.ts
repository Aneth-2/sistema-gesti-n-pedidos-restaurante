import { Plato } from "../../domain/entities/Plato";
import { Pedido } from "../../domain/entities/Pedido";

export class AgregarPlatoUseCase {
  public ejecutar(
    pedido: Pedido,
    platoId: string,
    nombre: string,
    precio: number
  ): Plato {
    const plato = new Plato(platoId, nombre, precio);
    pedido.agregarPlato(plato);
    return plato;
  }
}