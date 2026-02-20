import { EstadoPlato } from "../enums/EstadoPlato";

export class Plato {
  private estado: EstadoPlato;

  constructor(
    private readonly id: string,
    private nombre: string,
    private precio: number,
    estado?: EstadoPlato
  ) {
    this.estado = estado ?? EstadoPlato.PENDIENTE;
  }

  public getId(): string {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getPrecio(): number {
    return this.precio;
  }

  public getEstado(): EstadoPlato {
    return this.estado;
  }

  public cambiarEstado(nuevoEstado: EstadoPlato): void {
    this.estado = nuevoEstado;
  }
}