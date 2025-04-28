"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const Car_1 = __importDefault(require("../model/Car"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.db = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewCar() {
        return new Car_1.default();
    }
}
exports.default = MainController;
