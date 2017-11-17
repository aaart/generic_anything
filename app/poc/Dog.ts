import Pet from "./Pet";

export default class Dog implements Pet {
    public MakeNoise(): void {
        alert("Wofff!");
    }
}