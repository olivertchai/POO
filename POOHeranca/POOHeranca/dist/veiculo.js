"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getAno() {
        return this.marca;
    }
    setAno(ano) {
        this.ano = ano;
    }
}
exports.default = Veiculo;
