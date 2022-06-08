"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    get Color() {
        return this.color;
    }
    set Color(color) {
        this.color = color;
    }
}
exports.Shape = Shape;
