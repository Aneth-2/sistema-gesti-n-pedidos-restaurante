import { Mesa } from "../../domain/entities/Mesa";
import { Pedido } from "../../domain/entities/Pedido";

export class MetricasService {
  public calcularClientesActivos(mesas: Mesa[]): number {
    return mesas.reduce((total, mesa) => total + mesa.obtenerClientes().length, 0);
  }

  public calcularTotalVentas(pedidos: Pedido[]): number {
    return pedidos.reduce((total, pedido) => total + pedido.calcularTotal(), 0);
  }
}