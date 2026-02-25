import { Pedido } from "../../domain/entities/Pedido";
import { PedidoRepository } from "../../domain/repositories/PedidoRepo";
import { ClienteRepository } from "../../domain/repositories/ClienteRepo";

export class CrearPedidoUseCase {

  constructor(
    private pedidoRepository: PedidoRepository,
    private clienteRepository: ClienteRepository
  ) {}

  public ejecutar(clienteId: string, pedidoId: string): Pedido {

    const cliente = this.clienteRepository.findById(clienteId);

    if (!cliente) {
      throw new Error("Cliente no encontrado");
    }

    const pedido = new Pedido(pedidoId, cliente.getId());

    cliente.asignarPedido(pedido);
    this.pedidoRepository.save(pedido);

    return pedido;
  }
}