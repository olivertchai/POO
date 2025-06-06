// import MainController from "./controller/MainController";
import Database from "./db/Database";
import Employee from "./model/employee";
import EmployeeHistory from "./model/employeeHistory";
import Position from "./model/position";
import { EventType } from "./model/enum/eventType";
import { Gender } from "./model/enum/gender";
import { StatusEmployee } from "./model/enum/StatusEmployee";
import MealVoucher from "./model/mealVoucher";
//-----------------------------------------------------------------






const devPosition = new Position("Gerente", "Gerencia a loja", 5000);
const eh = new EmployeeHistory(EventType.PROMOCAO, new Date(2025, 11, 20));
const vr = new MealVoucher();
// Cria um funcionário
const ep1 = new Employee(
  "Julia",
  "123.654.789-89",
  new Date(1989, 10, 8),
  42999885577,
  "julia@example.com",
  Gender.F,
  StatusEmployee.ATIVO,
  new Date(2023, 1, 1),
  devPosition,
  new Date(2026,12,8),
  true
);
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
