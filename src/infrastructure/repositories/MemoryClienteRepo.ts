import { Cliente } from "../../domain/entities/Cliente";
import { ClienteRepository } from "../../domain/repositories/ClienteRepo";

export class InMemoryClienteRepository implements ClienteRepository {

  private clientes: Cliente[] = [];

  save(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  findById(id: string): Cliente | undefined {
    return this.clientes.find(c => c.getId() === id);
  }

  findAll(): Cliente[] {
    return this.clientes;
  }
}