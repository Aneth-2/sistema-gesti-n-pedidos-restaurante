import { Pedido } from "../../domain/entities/Pedido";
import { Cliente } from "../../domain/entities/Cliente";
import { PedidoRepository } from "../../domain/repositories/PedidoRepo";

export class CrearPedidoUseCase {
  constructor(private pedidoRepository: PedidoRepository) {}

  public ejecutar(cliente: Cliente, pedidoId: string): Pedido {
    const pedido = new Pedido(pedidoId, cliente.getId());
    cliente.asignarPedido(pedido);
    this.pedidoRepository.save(pedido);
    return pedido;
  }
}