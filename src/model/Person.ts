export default class Person{
    private name!: string;
    private telephone! : number;
    private CPF! : number;
  
    public getName(): string{
      return this.name;
    }
    public setName(name: string): void{
      this.name = name;
    }
  
    public getTelephone():number{
      return this.telephone;
    }
    public setTelephone(telephone:number):void{
      this.telephone = telephone;
    }

    public getCPF():number{
        return this.CPF;
    }
    public setCPF(CPF : number) : void{
        this.CPF = CPF;
    }

    public displayData() :string {
        let d : string = "Nome :" + this.name + 
                         "\nCPF : " + this.CPF +
                         "\nCelular : " + this.telephone ;
        return d;
        
    }
}