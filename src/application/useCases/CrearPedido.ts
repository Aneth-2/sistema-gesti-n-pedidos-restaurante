import { Pedido } from "../../domain/entities/Pedido";
import { Cliente } from "../../domain/entities/Cliente";

export class CrearPedidoUseCase {
  public ejecutar(cliente: Cliente, pedidoId: string): Pedido {
    const pedido = new Pedido(pedidoId, cliente.getId());
    cliente.asignarPedido(pedido);
    return pedido;
  }
}