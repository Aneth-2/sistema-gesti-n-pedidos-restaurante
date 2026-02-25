import { Cliente } from "../entities/Cliente";

export interface ClienteRepository {
  save(cliente: Cliente): void;
  findById(id: string): Cliente | undefined;
  findAll(): Cliente[];
}