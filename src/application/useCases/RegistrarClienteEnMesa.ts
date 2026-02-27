import { Cliente } from "../../domain/entities/Cliente";
import { Mesa } from "../../domain/entities/Mesa";
import { ClienteRepository } from "../../domain/repositories/ClienteRepo";
import { ClienteYaRegistradoEnMesaError } from "../../domain/errors/ClienteYaRegistradoEnMesaError";

export class RegistrarClienteEnMesaUseCase {
  constructor(private clienteRepository: ClienteRepository) {}

  public ejecutar(mesa: Mesa, clienteId: string, nombre: string): Cliente {
    const clienteExiste = mesa.obtenerClientes().some(c => c.getId() === clienteId);

    if (clienteExiste) {
      throw new ClienteYaRegistradoEnMesaError();
    }

    const cliente = new Cliente(clienteId, nombre);
    this.clienteRepository.save(cliente);
    mesa.agregarCliente(cliente);

    return cliente;
  }
}
