"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CarRegister_1 = __importDefault(require("./CarRegister"));
class MainScreen {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.carRegister = new CarRegister_1.default(control);
        this.mainMenu();
    }
    mainMenu() {
        let continues = true;
        while (continues) {
            let choice = parseInt(this.prompt("Escolha:\n1. Cadastra Carro\n2. Cadastra Cliente\n3. Cadastra Venda\n4. Sair"));
            switch (choice) {
                case 1:
                    //abrir tela cadastro carro
                    this.carRegister.addCar();
                    break;
                case 2:
                    console.log("escolheu 2");
                    break;
                case 3:
                    console.log("escolheu 3");
                    break;
                case 4:
                    continues = false;
                    break;
                default:
                    console.log("digite um numero válido");
                    break;
            }
        }
        console.log("SAIU");
    }
}
exports.default = MainScreen;
