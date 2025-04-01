export default class Caminhao{
    private cargaMax!: number;

    public get():number{
        return this.cargaMax;
    }

    public set(cargaMax:number):void{
        this.cargaMax=cargaMax;
    }
}