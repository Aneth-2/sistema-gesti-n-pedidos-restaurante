import http from "http";

import { InMemoryMesaRepository } from "./infrastructure/repositories/MemoryMesaRepo";
import { RegistrarMesaUseCase } from "./application/useCases/RegistrarMesa";
import { MesaController } from "./presentation/controllers/MesaController";
import { createRouter } from "./presentation/routes/router";

// Repositorios
const mesaRepository = new InMemoryMesaRepository();

// UseCases
const registrarMesaUseCase = new RegistrarMesaUseCase(mesaRepository);

// Controllers
const mesaController = new MesaController(registrarMesaUseCase);

// Router
const router = createRouter(mesaController);

// Servidor
const server = http.createServer(router);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`RestTrack running on http://localhost:${PORT}`);
});