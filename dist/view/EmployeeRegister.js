"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
async function main() {
    const Employee = [];
    const employeeRegister = await inquirer_1.default.prompt([
        { name: 'position', type: 'list', message: 'Tipo de funcionário :', choices: ['Desenvolvedor', 'Tech Lead'] },
        { name: 'salary', type: 'input', message: 'Salário :' },
        { name: 'description', type: 'editor', message: 'Função :' }
    ]);
}
;
