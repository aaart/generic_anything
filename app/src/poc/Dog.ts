import { injectable } from "inversify"
import Pet from "./Pet";

@injectable()
export default class Dog implements Pet {
    public MySound: string = "Woff!";
}