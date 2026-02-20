import { ProductoMenu } from "./ProductoMenu";

export class DetallePedido {
  constructor(
    public producto: ProductoMenu,
    public cantidad: number
  ) {}
}
