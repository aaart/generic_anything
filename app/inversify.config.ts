import "reflect-metadata";
import { Container } from "inversify";


import SERVICE_IDENTIFIER from "./ServiceIdentifier"
import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import Cat from "src/poc/Cat"

var container = new Container();

container.bind<Pet>(SERVICE_IDENTIFIER.PET).to(Cat).inTransientScope();//.when(request => request.target.name.endsWith("cat"));
//container.bind<Pet>(SERVICE_IDENTIFIER.PET).to(Dog).inTransientScope().when(request => request.target.name.endsWith("dog"));

export { container };
