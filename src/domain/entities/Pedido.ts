import { EstadoPedido } from "../enums/EstadoPedido";
import { Plato } from "./Plato";

export class Pedido {
  private platos: Plato[] = [];
  private estado: EstadoPedido = EstadoPedido.ACTIVO;
  private fechaCreacion: Date;

  constructor(
    private readonly id: string,
    private readonly clienteId: string
  ) {
    this.fechaCreacion = new Date();
  }

  public agregarPlato(plato: Plato): void {
    this.platos.push(plato);
  }

  public obtenerPlatos(): Plato[] {
    return this.platos;
  }

  public obtenerEstado(): EstadoPedido {
    return this.estado;
  }

  public cambiarEstado(nuevoEstado: EstadoPedido): void {
    this.estado = nuevoEstado;
  }

  public calcularTotal(): number {
    return this.platos.reduce((total, plato) => total + plato.getPrecio(), 0);
  }

  public obtenerFechaCreacion(): Date {
    return this.fechaCreacion;
  }

  public getId(): string {
  return this.id;
  }
}