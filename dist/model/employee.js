"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class Employee extends person_1.default {
    telephone;
    email;
    gender;
    status;
    admissionDate;
    resignationDate;
    position;
    history = [];
    useMealVouncher;
    constructor(name, CPF, dateOfBirth, telephone, email, gender, status, admissionDate, position, resignationDate, useMealVouncher) {
        super(name, CPF, dateOfBirth);
        this.telephone = telephone;
        this.email = email;
        this.gender = gender;
        this.status = status;
        this.admissionDate = admissionDate;
        this.resignationDate = resignationDate;
        this.position = position;
        this.useMealVouncher = useMealVouncher;
    }
    // Getters
    getTelephone() { return this.telephone; }
    getEmail() { return this.email; }
    getGender() { return this.gender; }
    getStatus() { return this.status; }
    getAdmissionDate() { return this.admissionDate.toLocaleDateString("pt-BR"); }
    getResignationDate() {
        return this.resignationDate
            ? this.resignationDate.toLocaleDateString('pt-BR')
            : undefined;
    }
    // Setters
    setTelephone(telephone) { this.telephone = telephone; }
    setEmail(email) { this.email = email; }
    setGender(gender) { this.gender = gender; }
    setStatus(status) { this.status = status; }
    setAdmissionDate(admissionDate) { this.admissionDate = admissionDate; }
    setResignationDate(resignationDate) { this.resignationDate = resignationDate; }
    /** Retorna o histórico de eventos do funcionário */
    getHistory() { return this.history; }
    /** Adiciona uma entrada ao histórico de eventos */
    addHistory(entry) { this.history.push(entry); }
    displayData() {
        return ` ${super.displayData()} \n Cargo: ${this.position} \n Status: ${this.status}`;
    }
    getHoursWork(dateToday) {
        const end = dateToday ?? new Date(); //operador nullish coalescing (??): é um operador lógico que retorna o seu operando do lado direito quando o seu operador o lado esquerdo é null ou undefined 
        const diff = end.getTime() - this.admissionDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    }
    applyBenefit(benefit) {
        benefit.applyBenefit(this);
    }
}
exports.default = Employee;
