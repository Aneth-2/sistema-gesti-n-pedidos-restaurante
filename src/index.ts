import express from "express";

const app = express();
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("Backend con Node.js + TypeScript funcionando 🚀");
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
