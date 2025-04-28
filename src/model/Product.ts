export default class Product{
    private product!: string;
    private date!: number;
    private price!:number;

    public getProduct():string{
        return this.product;
    }
    public setProduct( product : string) : void{
        this.product = product;
    }

    public getDate():number{
        return this.date;
    }
    public setDate( date : number ) : void{
        this.date = date;
    }

    public getPrice():number{
        return this.price;
    }
    public setPrice(price:number) : void{
        this.price = price;
    }

    public displayData():string{
        let d : string = "Produto : " + this.product +
                         "\n Data : " + this.date +
                         "\n Preço : " + this.price;
        return d ;
    }
}