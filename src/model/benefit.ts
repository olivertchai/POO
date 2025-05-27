import Employee from "./employee";
export default abstract class Benefit{

    constructor(public name: string) {}

    abstract applyBenefit(employee:Employee):void;
}