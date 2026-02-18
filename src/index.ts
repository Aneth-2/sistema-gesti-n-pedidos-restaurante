import express from "express";
import mesasRouter from "./routes/mesas";

const app = express();
const PORT = 3000;

app.use(express.json()); // ← IMPORTANTE

app.use("/mesas", mesasRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
