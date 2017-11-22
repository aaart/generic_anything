import Pet from "./Pet"
import { injectable } from "inversify";

@injectable()
export default class Cat implements Pet {
    public MySound: string = "Meow!";
    
}