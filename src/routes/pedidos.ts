import { Router } from "express";
import { Pedido } from "../models/Pedido";
import { DetallePedido } from "../models/DetallePedido";
import { ProductoMenu } from "../models/ProductoMenu";

const router = Router();
const pedidos: Pedido[] = [];

router.post("/", (req, res) => {
  const { id, mesaId, productos } = req.body;
  const nuevoPedido = new Pedido(id, mesaId);

  productos.forEach((p: any) => {
    const producto = new ProductoMenu(p.id, p.nombre, p.precio, p.categoria);
    const detalle = new DetallePedido(producto, p.cantidad);
    nuevoPedido.agregarDetalle(detalle);
  });

  pedidos.push(nuevoPedido);
  res.json(nuevoPedido);
});

router.get("/", (req, res) => {
  res.json(pedidos);
});

export default router;
 