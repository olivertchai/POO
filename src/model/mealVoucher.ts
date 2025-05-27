import Benefit from "./benefit";
import Employee from "./employee";
import Person from "./person";

export default class MealVoucher extends Benefit{

constructor() {
    super("Vale Refeição");
}

public applyBenefit(employee: Employee): void {
    if (employee.useMealVouncher) 
      console.log( `${Person.name} recebeu ${this.name}.`);
    else
      console.log(`${Person.name} não tem direito a ${this.name}.`);
  }
    
}