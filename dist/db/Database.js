"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.carDb = [];
        this.sales = [];
    }
    addNewCar(car) {
        this.carDb.push(car);
        this.listAll();
    }
    getCar(index) {
        return this.carDb[index];
    }
    addNewSale(sale) {
        this.sales.push(sale);
    }
    listAllSales() {
        let s = "";
        for (let i = 0; i < this.sales.length; i++) {
            const element = this.sales[i];
            s += "\n" + element.getCar().getModel();
            s += "\n" + element.getClient().getName();
        }
        return s;
    }
    listAll() {
        for (let index = 0; index < this.carDb.length; index++) {
            const element = this.carDb[index];
            console.log("\n" + element.getModel() + "  " + element.getYear());
        }
    }
}
exports.default = Database;
