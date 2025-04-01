export default class Moto{
    private cilindrada! : number;

    public constructor(cilindrada:number){
        this.cilindrada=cilindrada;
    }

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
        s = s + "\n Portas" + this.portas;

        return s ;
    }    


}