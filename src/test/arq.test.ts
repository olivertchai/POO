import Person from "../model/person";

const P : Person = new Person('wagner','12291767992' ,new Date(10,2,2000))

test("teste do met getName",() =>{
    expect(P.getName()).toBe('wagner');
})

//test("teste do met displayData", () =>{
//  expect(P.displayData()).toBe('wagner','12291767992');
//})