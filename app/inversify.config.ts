import "reflect-metadata";
import * as _ from "lodash";
import { Container, injectable } from "inversify";

import SERVICE_IDENTIFIER from "ServiceIdentifier"

import NavigationLoader from "scopes/navigation/services/NavigationLoader"
import LocalNavigationLoader from "scopes/navigation/services/LocalNavigationLoader"

import Navigation from "scopes/navigation/components/Navigation"

import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import Cat from "src/poc/Cat"

import getDecorators from "inversify-inject-decorators";

var moduleContainer = new Container();

var registerComponents = (container: Container): void => {
    // **** SERVICES ****
    container.bind<NavigationLoader>(SERVICE_IDENTIFIER.NAVIGATION_LOADER).to(LocalNavigationLoader).inSingletonScope();
    
    // **** POC ****
    container.bind<Pet>(SERVICE_IDENTIFIER.PET).to(Cat).inTransientScope();
};

var resetContainer = (): void => {
    moduleContainer.unbindAll();
    registerComponents(moduleContainer);
};

registerComponents(moduleContainer);
var { lazyInject } = getDecorators(moduleContainer);

export {
    moduleContainer as container, 
    lazyInject,
    resetContainer
}
