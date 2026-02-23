import { Mesa } from "../../domain/entities/Mesa";
import { MesaRepository } from "../../domain/repositories/MesaRepo";

export class InMemoryMesaRepository implements MesaRepository {
  private mesas: Mesa[] = [];

  save(mesa: Mesa): void {
    this.mesas.push(mesa);
  }

  findAll(): Mesa[] {
    return this.mesas;
  }

  findByNumero(numero: number): Mesa | undefined {
    return this.mesas.find(m => m.getNumero() === numero);
  }
}