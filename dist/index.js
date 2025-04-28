"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = __importDefault(require("./controller/MainController"));
new MainController_1.default();
// //iniciando teste
// //criando carros e clientes
// let car1: Car = new Car();
// car1.setModel("Fusca");
// let car2: Car = new Car();
// car2.setModel("Kombi");
// let cl1: Client = new Client();
// cl1.setName("Emerson");
// let cl2: Client = new Client();
// cl2.setName("Paula");
// //criando vendas e associando carros e clientes
// let sale: Sale = new Sale();
// sale.doSale(car1, cl1);
// let sale2: Sale = new Sale();
// sale2.doSale(car2, cl2);
// let sale3: Sale = new Sale();
// sale3.doSale(car2, cl1);
// // criando o banco
// let db: Database = new Database();
// db.addNewSale(sale);
// db.addNewSale(sale2);
// db.addNewSale(sale3);
// //listando tudo
// console.log(db.listAllSales());
