import { Mesa } from "../../domain/entities/Mesa";
import { MesaRepository } from "../../domain/repositories/MesaRepo";
import { MesaYaExisteError } from "../../domain/errors/MesaYaExisteError";

export class RegistrarMesaUseCase {
  constructor(private mesaRepository: MesaRepository) {}

  public ejecutar(numero: number): Mesa {
    const mesaExiste = this.mesaRepository.findByNumero(numero);

    if (mesaExiste) {
      throw new MesaYaExisteError();
    }

    const mesa = new Mesa(numero);
    this.mesaRepository.save(mesa);
    return mesa;
  }

  public obtenerMesas(): Mesa[] {
    return this.mesaRepository.findAll();
  }
}
