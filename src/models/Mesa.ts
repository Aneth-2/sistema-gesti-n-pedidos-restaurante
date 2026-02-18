export class Mesa {
  constructor(
    public id: number,
    public numero: number,
    public clientes: string[] = []
  ) {}

  agregarCliente(nombre: string) {
    this.clientes.push(nombre);
  }
}
