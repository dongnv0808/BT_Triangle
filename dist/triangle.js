"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const shape_1 = require("./shape");
class Triangle extends shape_1.Shape {
    constructor(name, color, side1, side2, side3) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    get Side1() {
        return this.side1;
    }
    set Side1(side1) {
        this.side1 = side1;
    }
    get Side2() {
        return this.side2;
    }
    set Side2(side2) {
        this.side2 = side2;
    }
    get Side3() {
        return this.side3;
    }
    set Side3(side3) {
        this.side3 = side3;
    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    getArea() {
        let perimeter = this.getPerimeter();
        return Math.sqrt(perimeter * (perimeter - this.side1) * (perimeter - this.side2) * (perimeter - this.side3));
    }
}
exports.Triangle = Triangle;
