"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangle_1 = require("./triangle");
let triangle = new triangle_1.Triangle("Triangle", "Red", 5, 10, 12);
console.log(triangle);
console.log(triangle.getArea());
console.log(triangle.getPerimeter());
