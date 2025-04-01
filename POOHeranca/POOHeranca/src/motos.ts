import Veiculo from "./veiculo";

export default class Moto extends Veiculo{
    private cilindrada! : number;

    public getCilindrada():number{
        return this.cilindrada;
    }

    public setCilindrada(cilindrada:number):void{
        this.cilindrada=cilindrada;
    }

    //sobre-escrita de método
    public listaAtributo():string{
        let s :string="";

        s = s + super.listaAtributo();
        s = s + "\n Cilindrada" + this.cilindrada;

        return s ;
    }    


}