import { Mesa } from "../../domain/entities/Mesa";
import { MesaRepository } from "../../domain/repositories/MesaRepo";

export class RegistrarMesaUseCase {
  constructor(private mesaRepository: MesaRepository) {}

  public ejecutar(numero: number): Mesa {
    const mesa = new Mesa(numero);
    this.mesaRepository.save(mesa);
    return mesa;
  }

  public obtenerMesas(): Mesa[] {
    return this.mesaRepository.findAll();
  }
}