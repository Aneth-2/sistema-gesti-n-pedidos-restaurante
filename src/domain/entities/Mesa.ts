import { EstadoMesa } from "../enums/EstadoMesa";
import { Cliente } from "./Cliente";
import { Mesero } from "./Mesero";

export class Mesa {
  private estado: EstadoMesa = EstadoMesa.LIBRE;
  private clientes: Cliente[] = [];
  private mesero?: Mesero;

  constructor(
    private readonly numero: number
  ) {}

  public asignarMesero(mesero: Mesero): void {
    this.mesero = mesero;
  }

  public agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
    this.estado = EstadoMesa.OCUPADA;
  }

  public liberarMesa(): void {
    this.clientes = [];
    this.estado = EstadoMesa.EN_LIMPIEZA;
  }

  public marcarComoLibre(): void {
    this.estado = EstadoMesa.LIBRE;
  }

  public obtenerEstado(): EstadoMesa {
    return this.estado;
  }

  public obtenerClientes(): Cliente[] {
    return this.clientes;
  }

  public obtenerMesero(): Mesero | undefined {
    return this.mesero;
  }

  public getNumero(): number {
    return this.numero;
  }
}