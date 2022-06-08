export class Shape{
    private name: string;
    private color: string;
    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }
    public get Name(): string{
        return this.name;
    }
    public set Name(name: string){
        this.name = name;
    }
    public get Color(): string{
        return this.color;
    }
    public set Color(color: string){
        this.color = color;
    }
}