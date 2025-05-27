"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const benefit_1 = __importDefault(require("./benefit"));
const person_1 = __importDefault(require("./person"));
class MealVouncher extends benefit_1.default {
    constructor() {
        super("Vale Refeição");
    }
    applyBenefit(employee) {
        if (employee.usaMealVouncher)
            return `${person_1.default.name} recebeu ${this.name}.`;
        return `${person_1.default.name} não tem direito a ${this.name}.`;
    }
}
exports.default = MealVouncher;
