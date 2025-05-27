import Person from "./person";
import Position from "./position";
import EmployeeHistory from './employeeHistory';
import Benefit from "./benefit";
import { Gender } from './enum/gender';
import { StatusEmployee } from './enum/StatusEmployee';

export default class Employee extends Person{
    private telephone!: number;
    private email!: string;
    private gender!: Gender;
    private status!: StatusEmployee;
    private admissionDate!: Date;
    private resignationDate?: Date ; 
    private position: Position;                 
    private history: EmployeeHistory[] = [];
    public useMealVouncher?: boolean;
   

    public constructor (
        name: string,
        CPF: string,
        dateOfBirth: Date,
        telephone: number,
        email: string,
        gender: Gender,
        status: StatusEmployee,
        admissionDate: Date ,
        position: Position 
    );

    public constructor (
        name: string,
        CPF: string,
        dateOfBirth: Date,
        telephone: number,
        email: string,
        gender: Gender,
        status: StatusEmployee,
        admissionDate: Date ,
        position: Position ,
        resignationDate: Date ,
        useMealVouncher:boolean
    );

    public constructor(
        name: string,
        CPF: string,
        dateOfBirth: Date,
        telephone: number,
        email: string,
        gender: Gender,
        status: StatusEmployee,
        admissionDate: Date,
        position: Position,
        resignationDate?: Date , 
        useMealVouncher?:boolean
    )

    {    
        super(name , CPF ,dateOfBirth);
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
    public getTelephone(): number { return this.telephone; }

    public getEmail(): string { return this.email; }

    public getGender(): string { return this.gender; }

    public getStatus(): string { return this.status; }

    public getAdmissionDate(): string { return this.admissionDate.toLocaleDateString("pt-BR"); }

    public getResignationDate(): string | undefined {
        return this.resignationDate
        ? this.resignationDate.toLocaleDateString('pt-BR')
        : undefined;
    }

    // Setters
    public setTelephone(telephone: number): void { this.telephone = telephone; }

    public setEmail(email: string): void { this.email = email; }

    public setGender(gender: Gender): void { this.gender = gender; }

    public setStatus(status: StatusEmployee): void { this.status = status; }

    public setAdmissionDate(admissionDate: Date): void { this.admissionDate = admissionDate; }

    public setResignationDate(resignationDate: Date): void { this.resignationDate = resignationDate; }

    // Retorna o histórico de eventos do funcionário 
    public getHistory(): EmployeeHistory[] { return this.history; }




    //-------------------------------------------------------------------------------------------------------------

    // Sobre-carga de método: calcular tempo de empresa
    public getHoursWork():number; //Informa ao TS que existe uma versão de getHoursWork que retorna um number quando chamada sem argumentos.
    public getHoursWork(dateToday: Date):number;
    public getHoursWork(dateToday?: Date):number{
        const end = dateToday ?? new Date(); //operador nullish coalescing (??): é um operador lógico que retorna o seu operando do lado direito quando o seu operador o lado esquerdo é null ou undefined 
        const diff = end.getTime() - this.admissionDate.getTime();
        return Math.floor(diff/ (1000 * 60 * 60 * 24 * 30));

    }
    
    // Adiciona uma entrada ao histórico de eventos 
    public addHistory(entry: EmployeeHistory): void { 
        this.history.push(entry); 
    }

    public displayData(): string {
        return ` ${super.displayData()} \n Cargo: ${this.position} \n Status: ${this.status}`;
    }

    //metodo pego da Classe Abstrata Benefit
    public applyBenefit(benefit:Benefit):void{
        benefit.applyBenefit(this);
    }
}