export default class Veiculo{
    private modelo! : string;
    private marca! : string;
    private ano!: number;

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo:string):void{
        this.modelo=modelo;
    }

    public getMarca():string{
        return this.marca;
    }

    public setMarca(marca:string):void{
        this.marca=marca;
    }

    public getAno():string{
        return this.marca;
    }

    public setAno(ano:number):void{
        this.ano=ano;
    }

    public listaAtributo():string{
        let s : string = "" ;
        s = s + "Marca:" + this.marca ;
        s = s + "\n Modelo:" + this.modelo ;
        s = s + "\n Ano:" + this.ano ;

        return s;
    }
} 
