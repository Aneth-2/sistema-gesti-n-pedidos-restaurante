import { InMemoryMesaRepository } from "./infrastructure/repositories/MemoryMesaRepo";
import { InMemoryPedidoRepository } from "./infrastructure/repositories/MemoryPedidoRepo";

import { RegistrarMesaUseCase } from "./application/useCases/RegistrarMesa";
import { RegistrarClienteEnMesaUseCase } from "./application/useCases/RegistrarClienteEnMesa";
import { CrearPedidoUseCase } from "./application/useCases/CrearPedido";
import { AgregarPlatoUseCase } from "./application/useCases/AgregarPlato";
import { MetricasService } from "./application/services/MetricasService";

// Repositorios
const mesaRepository = new InMemoryMesaRepository();
const pedidoRepository = new InMemoryPedidoRepository();

// UseCases con inyección
const registrarMesa = new RegistrarMesaUseCase(mesaRepository);
const registrarCliente = new RegistrarClienteEnMesaUseCase();
const crearPedido = new CrearPedidoUseCase(pedidoRepository);
const agregarPlato = new AgregarPlatoUseCase();
const metricas = new MetricasService();

// Flujo
const mesa1 = registrarMesa.ejecutar(1);
const cliente1 = registrarCliente.ejecutar(mesa1, "C1", "Carlos");
const pedido1 = crearPedido.ejecutar(cliente1, "P1");

agregarPlato.ejecutar(pedido1, "PL1", "Pizza", 35);
agregarPlato.ejecutar(pedido1, "PL2", "Bebida", 10);

console.log("Clientes activos:", metricas.calcularClientesActivos(registrarMesa.obtenerMesas()));
console.log("Total venta pedido:", pedido1.calcularTotal());