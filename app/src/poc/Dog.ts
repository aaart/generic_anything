import Pet from "./Pet";
import { injectable } from "inversify";

@injectable()
export default class Dog implements Pet {
    public MySound: string = "Woff!";
}