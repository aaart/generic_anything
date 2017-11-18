import "reflect-metadata";
import { Container } from "inversify";


import SERVICE_IDENTIFIER from "./ServiceIdentifier"
import Pet from "./poc/Pet"
import Dog from "./poc/Dog"
import Cat from "./poc/Cat"

var container = new Container();

container.bind<Pet>(SERVICE_IDENTIFIER.PET).to(Cat);

export { container };
