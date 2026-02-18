import { Router } from "express";
import { Mesa } from "../models/Mesa";

const router = Router();
const mesas: Mesa[] = [];

router.post("/", (req, res) => {
  const { id, numero } = req.body;
  const nuevaMesa = new Mesa(id, numero);
  mesas.push(nuevaMesa);
  res.json(nuevaMesa);
});

router.get("/", (req, res) => {
  res.json(mesas);
});

export default router;
