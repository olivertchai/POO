"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class CarRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addCar() {
        //precisamos de um carro
        let car = this.control.getNewCar();
        // pedir ao user os dados
        let model = this.prompt("\ndigite o modelo do carro");
        let year = parseInt(this.prompt("\ndigite o ano"));
        // popular o objeto
        car.setYear(year);
        car.setModel(model);
        //guardar o carro no banco
        this.control.db.addNewCar(car);
    }
}
exports.default = CarRegister;
