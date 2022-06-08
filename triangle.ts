import { Shape } from "./shape";

export class Triangle extends Shape{
    private side1: number;
    private side2: number;
    private side3: number;
    constructor(name: string, color: string, side1: number, side2: number, side3: number){
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    public get Side1():number{
        return this.side1;
    }
    public set Side1(side1: number){
        this.side1 = side1;
    }
    public get Side2():number{
        return this.side2;
    }
    public set Side2(side2: number){
        this.side2 = side2;
    }
    public get Side3():number{
        return this.side3;
    }
    public set Side3(side3: number){
        this.side3 = side3;
    }
    public getPerimeter(): number{
        return this.side1 + this.side2 + this.side3;
    }
    public getArea(): number{
        let perimeter = this.getPerimeter();
        return Math.sqrt(perimeter*(perimeter - this.side1) * (perimeter - this.side2) * ( perimeter - this.side3));
    }
}