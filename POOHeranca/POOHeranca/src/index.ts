import Carro from "./carros";
import Veiculo from "./veiculo";

let v:Veiculo = new Veiculo();

//v.setAno(1900);
//v.setMarca("Willys");
//v.setModelo("rural");

console.log(v.listaAtributo());

let c : Carro = new Carro();

c.setAno(2000);
c.setMarca("Ford");
c.setModelo("Ka");
c.setPortas(2);

console.log(c.listaAtributo());

let colecao : Veiculo[]=[];
colecao.push(v);
colecao.push(c);

for (let index = 0 ;index< colecao.length;index ++){
    const element = colecao[index];
    console.log(element.listaAtributo());
}


