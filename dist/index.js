"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("./model/employee"));
const employeeHistory_1 = __importDefault(require("./model/employeeHistory"));
const position_1 = __importDefault(require("./model/position"));
const eventType_1 = require("./model/enum/eventType");
const gender_1 = require("./model/enum/gender");
const StatusEmployee_1 = require("./model/enum/StatusEmployee");
const mealVoucher_1 = __importDefault(require("./model/mealVoucher"));
const devPosition = new position_1.default("Gerente", "Gerencia a loja", 5000);
const eh = new employeeHistory_1.default(eventType_1.EventType.PROMOCAO, new Date(2025, 11, 20));
const vr = new mealVoucher_1.default();
// Cria um funcionário
const ep1 = new employee_1.default("Julia", "123.654.789-89", new Date(1989, 10, 8), 42999885577, "julia@example.com", gender_1.Gender.F, StatusEmployee_1.StatusEmployee.ATIVO, new Date(2023, 1, 1), devPosition, new Date(2026, 12, 8), true);
// Adiciona o evento ao histórico de ep1
ep1.addHistory(eh);
console.log("------------------------------------------------------------------\n" + devPosition.displayData());
console.log('------------------------------------------------------------------\n' + eh.displayData());
console.log('------------------------------------------------------------------\n' + ep1.displayData());
console.log("Tempo de casa (meses):", ep1.getHoursWork());
//console.log("Histórico de Julia:", ep1.getHistory().map(e => e.displayData()));
ep1.applyBenefit(vr);
//   // Instancia funcionário com data de demissão
//   const ep2 = new Employee(
//     "Pedro",
//     "987.321.654-00",
//     new Date(1990, 4, 15),
//     41999900011,
//     "pedro@example.com",
//     Gender.M,
//     StatusEmployee.DEMITIDO,
//     new Date(2020, 5, 10),
//     devPosition,
//     new Date(2024, 11, 31)
//   );
//   // Testando saída
//   console.log(devPosition.displayData());         // ex.: "Gerente (R$ 5000.00)"
//   console.log(eh.displayData());                  // ex.: "Promoção em 20/12/2025"
//   console.log(ep1.displayData());                 // ex.: "Nome: Julia, CPF: 123.654.789-89, Cargo: Gerente, Status: ATIVO"
//   console.log("Tempo de casa (meses):", ep1.getHoursWork());
//   console.log("Histórico de Julia:", ep1.getHistory().map(e => e.displayData()));
//const address = new Address();
//address.setAddress("Rua das Flores");
//address.setStreetNum(123);
//address.setCity("São Paulo");
// Criando um endereço
// const endereco : Address = new Address("Rua das Flores", 123, "São Paulo");
