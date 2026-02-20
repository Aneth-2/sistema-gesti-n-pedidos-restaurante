import { Pedido } from "./Pedido";

export class Cliente {
  private pedido?: Pedido;

  constructor(
    private readonly id: string,
    private nombre: string
  ) {}

  public asignarPedido(pedido: Pedido): void {
    this.pedido = pedido;
  }

  public obtenerPedido(): Pedido | undefined {
    return this.pedido;
  }

  public getId(): string {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }
}