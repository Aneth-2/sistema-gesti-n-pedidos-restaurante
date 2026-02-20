import { Cliente } from "../../domain/entities/Cliente";
import { Mesa } from "../../domain/entities/Mesa";

export class RegistrarClienteEnMesaUseCase {
  public ejecutar(mesa: Mesa, clienteId: string, nombre: string): Cliente {
    const cliente = new Cliente(clienteId, nombre);
    mesa.agregarCliente(cliente);
    return cliente;
  }
}