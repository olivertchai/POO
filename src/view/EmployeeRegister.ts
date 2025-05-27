import inquirer from "inquirer";
import Employee from "../model/employee";
import Choices from "inquirer/lib/objects/choices";

async function main() {
    const Employee : Employee[] = [];

    const employeeRegister = await inquirer.prompt([
        { name: 'position' , type: 'list' , message: 'Tipo de funcionário :' , choices :['Desenvolvedor' , 'Tech Lead'] } ,
        { name: 'salary' , type: 'input' , message:'Salário :'} ,
        { name: 'description' , type: 'editor' , message: 'Função :'}
    ]);
    
};