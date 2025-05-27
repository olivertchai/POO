export default class Person implements IPessoa{
    name: string;
    CPF: string;
    dateOfBirth: Date;
  
    constructor(name: string, CPF: string, dateOfBirth: Date) {
      this.name = name;
      this.CPF = CPF;
      this.dateOfBirth = dateOfBirth;
    }
  
    public getName(): string { return this.name; }
    public getCPF(): string { return this.CPF; }
    public getDateOfBirth(): string { return this.dateOfBirth.toLocaleString('pt-BR'); }

    
    public setName(name: string): void {
        this.name = name;
    }    
    public setCPF(CPF: string): void {
        this.CPF = CPF;
    }
    public setDateOfBirth(dateOfBirth: Date): void {
        this.dateOfBirth = dateOfBirth;
    }
  
    // Método sobrescrito em subclasses
    public displayData(): string {
      return `Nome: ${this.name} \n CPF: ${this.CPF} \n Data de Nascimento: ${this.dateOfBirth.toLocaleDateString(`pt-br`)} \n`; 
    }
  }