import { Pedido } from "../../domain/entities/Pedido";
import { PedidoRepository } from "../../domain/repositories/PedidoRepo";

export class InMemoryPedidoRepository implements PedidoRepository {
  private pedidos: Pedido[] = [];

  save(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }

  findById(id: string): Pedido | undefined {
  return this.pedidos.find(p => p.getId() === id);
  }
}