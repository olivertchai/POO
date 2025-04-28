import Database from "../db/Database";
import Car from "../model/Car";
import MainScreen from "../view/MainScreen";

export default class MainController{

    public db: Database = new Database();

    constructor(){

       new MainScreen(this);

    }


    public getNewCar(): Car{
        return new Car();
    }


}