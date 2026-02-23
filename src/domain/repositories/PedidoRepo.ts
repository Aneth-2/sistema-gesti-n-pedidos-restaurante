import { Pedido } from "../entities/Pedido";

export interface PedidoRepository {
  save(pedido: Pedido): void;
  findAll(): Pedido[];
  findById(id: string): Pedido | undefined;
}