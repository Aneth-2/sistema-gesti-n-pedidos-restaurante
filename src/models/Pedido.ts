import { DetallePedido } from "./DetallePedido";

export class Pedido {
  constructor(
    public id: number,
    public mesaId: number,
    public detalles: DetallePedido[] = [],
    public estado: string = "Pendiente"
  ) {}

  agregarDetalle(detalle: DetallePedido) {
    this.detalles.push(detalle);
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
  }
}
