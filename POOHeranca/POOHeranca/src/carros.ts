import Veiculo from "./veiculo";

export default class Carro extends Veiculo{
    private portas!: number;


    public getPortas():number{
        return this.portas;
    }

    public setPortas(portas:number):void{
        this.portas=portas;
    }
    
    //sobre-escrita de método
    public listaAtributo():string{
        let s :string="";

        s = s + super.listaAtributo();
        s = s + "\n Portas" + this.portas;

        return s ;
    }
}