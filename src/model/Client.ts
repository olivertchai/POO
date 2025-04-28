import Person from "./Person";
import Address from "./Address";

export default class Client extends Person{
  private purchaseHistory!:number;
  private address! :Address;

  public getPurchaseHistory():number{
    return this.purchaseHistory;
  }
  public setPurchaseHistory(purchaseHistory:number):void{
    this.purchaseHistory = purchaseHistory;
  }

  public displayData(): string {
    let d: string = "";
    d = super.displayData() +
        "Histórico de Compras : " + this.purchaseHistory ;

    return d;
  }


}