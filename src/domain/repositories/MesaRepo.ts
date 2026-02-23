import { Mesa } from "../entities/Mesa";

export interface MesaRepository {
  save(mesa: Mesa): void;
  findAll(): Mesa[];
  findByNumero(numero: number): Mesa | undefined;
}