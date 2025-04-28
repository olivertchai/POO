export default class City{
    private address!: string;
    private streetNum!:number;
    private city!: string;

    public getAddress(): string{
        return this.address;
    }
    public setAddress(address:string):void{
        this.address = address;
    }

    public getStreetNum():number{
        return this.streetNum;
    }
    public setStreetNum(streetNum:number):void{
        this.streetNum = streetNum;
    }

    public getCity(): string{
        return this.city;
    }
    public setCity(city:string):void{
        this.city = city;
    }

    public addressComplete():string{
        let a : string = "Rua : " + this.address +
                         "\nNúmero : " + this.streetNum + 
                         "\nCidade : " + this.city ;
        return a;
    }
}