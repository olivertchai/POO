"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("../model/person"));
const P = new person_1.default('wagner', '12291767992', new Date(10, 2, 2000));
test("teste do met getName", () => {
    expect(P.getName()).toBe('wagner');
});
//test("teste do met displayData", () =>{
//  expect(P.displayData()).toBe('wagner','12291767992');
//})
