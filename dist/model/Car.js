"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = __importDefault(require("./Engine"));
class Car {
    constructor() {
        this.engine = new Engine_1.default();
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
}
exports.default = Car;
