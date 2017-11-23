import "reflect-metadata";
import * as _ from "lodash";
import { Container, injectable } from "inversify";
import getDecorators from "inversify-inject-decorators";
import SERVICE_IDENTIFIER from "ServiceIdentifier"

import NavigationLoader from "scopes/navigation/services/NavigationLoader"
import LocalNavigationLoader from "scopes/navigation/services/LocalNavigationLoader"

import CityListService from "src/scopes/cityList/services/CityListService";
import CityListServiceFake from "src/scopes/cityList/services/CityListServiceFake";

import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import Cat from "src/poc/Cat"

// **** CODE STARTS HERE ****

var moduleContainer = new Container();

var registerComponents = (container: Container): void => {
    container.bind<NavigationLoader>(SERVICE_IDENTIFIER.NAVIGATION_LOADER).to(LocalNavigationLoader).inSingletonScope();
    container.bind<CityListService>(SERVICE_IDENTIFIER.CITY_LIST_SERVICE).to(CityListServiceFake).inSingletonScope();

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
    resetContainer,
    SERVICE_IDENTIFIER
}
