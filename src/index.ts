import express from "express";
import mesasRouter from "./routes/mesas";
import pedidosRouter from "./routes/pedidos"; 

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/mesas", mesasRouter);
app.use("/pedidos", pedidosRouter); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});