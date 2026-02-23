import { RegistrarMesaUseCase } from "./application/useCases/RegistrarMesa";
import { RegistrarClienteEnMesaUseCase } from "./application/useCases/RegistrarClienteEnMesa";
import { CrearPedidoUseCase } from "./application/useCases/CrearPedido";
import { AgregarPlatoUseCase } from "./application/useCases/AgregarPlato";
import { MetricasService } from "./application/services/MetricasService";

const registrarMesa = new RegistrarMesaUseCase();
const registrarCliente = new RegistrarClienteEnMesaUseCase();
const crearPedido = new CrearPedidoUseCase();
const agregarPlato = new AgregarPlatoUseCase();
const metricas = new MetricasService();

// Crear mesa
const mesa1 = registrarMesa.ejecutar(1);

// Registrar cliente
const cliente1 = registrarCliente.ejecutar(mesa1, "C1", "Carlos");

// Crear pedido
const pedido1 = crearPedido.ejecutar(cliente1, "P1");

// Agregar platos
agregarPlato.ejecutar(pedido1, "PL1", "Pizza", 35);
agregarPlato.ejecutar(pedido1, "PL2", "Bebida", 10);

// Métricas
console.log("Clientes activos:", metricas.calcularClientesActivos(registrarMesa.obtenerMesas()));
console.log("Total venta pedido:", pedido1.calcularTotal());