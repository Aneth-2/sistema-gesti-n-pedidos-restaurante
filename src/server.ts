import http from "http";

import { InMemoryMesaRepository } from "./infrastructure/repositories/MemoryMesaRepo";
import { RegistrarMesaUseCase } from "./application/useCases/RegistrarMesa";
import { MesaController } from "./presentation/controllers/MesaController";
import { createRouter } from "./presentation/routes/router";
import { InMemoryPedidoRepository } from "./infrastructure/repositories/MemoryPedidoRepo";
import { CrearPedidoUseCase } from "./application/useCases/CrearPedido";
import { AgregarPlatoUseCase } from "./application/useCases/AgregarPlato";
import { PedidoController } from "./presentation/controllers/PedidoController";

// Repositorios
const mesaRepository = new InMemoryMesaRepository();
const pedidoRepository = new InMemoryPedidoRepository();

// UseCases
const registrarMesaUseCase = new RegistrarMesaUseCase(mesaRepository);
const crearPedidoUseCase = new CrearPedidoUseCase(pedidoRepository);
const agregarPlatoUseCase = new AgregarPlatoUseCase();

// Controllers
const mesaController = new MesaController(registrarMesaUseCase);
const pedidoController = new PedidoController(
  crearPedidoUseCase,
  agregarPlatoUseCase,
  pedidoRepository
);

// Router (ahora con ambos controladores)
const router = createRouter(mesaController, pedidoController);

// Servidor
const server = http.createServer(router);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`RestTrack running on http://localhost:${PORT}`);
});
