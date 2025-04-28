"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sale {
    doSale(car, client) {
        this.car = car;
        this.client = client;
    }
    getCar() {
        return this.car;
    }
    setCar(car) {
        this.car = car;
    }
    getClient() {
        return this.client;
    }
    setClient(client) {
        this.client = client;
    }
}
exports.default = Sale;
