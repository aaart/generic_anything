import { injectable } from "inversify"
import Pet from "./Pet"

@injectable()
export default class Cat implements Pet {
    public MySound: string = "Meow!";
    
}