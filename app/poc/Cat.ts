import Pet from "./Pet"

export default class Cat implements Pet {
    MakeNoise(): void {
        alert("Meow!");
    }
    
}