import { Plato } from "../../domain/entities/Plato";
import { Pedido } from "../../domain/entities/Pedido";
import { PlatoYaExisteError } from "../../domain/errors/PlatoYaExisteError";

export class AgregarPlatoUseCase {
  public ejecutar(
    pedido: Pedido,
    platoId: string,
    nombre: string,
    precio: number
  ): Plato {
    const platoExiste = pedido.obtenerPlatos().some(p => p.getId() === platoId);

    if (platoExiste) {
      throw new PlatoYaExisteError();
    }

    const plato = new Plato(platoId, nombre, precio);
    pedido.agregarPlato(plato);
    return plato;
  }
}
