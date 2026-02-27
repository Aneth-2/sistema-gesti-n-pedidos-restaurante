import { Pedido } from "../../domain/entities/Pedido";
import { PedidoRepository } from "../../domain/repositories/PedidoRepo";
import { ClienteRepository } from "../../domain/repositories/ClienteRepo";
import { PedidoYaExisteError } from "../../domain/errors/PedidoYaExisteError";

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

    const pedidoExiste = this.pedidoRepository.findById(pedidoId);
    if (pedidoExiste) {
      throw new PedidoYaExisteError();
    }

    const pedido = new Pedido(pedidoId, cliente.getId());
    cliente.asignarPedido(pedido);
    this.pedidoRepository.save(pedido);

    return pedido;
  }
}
