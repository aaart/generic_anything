import "reflect-metadata";
import * as _ from "lodash";
import { Container, injectable } from "inversify";

import SERVICE_IDENTIFIER from "ServiceIdentifier"

import NavigationLoader from "src/services/NavigationLoader"
import LocalNavigationLoader from "src/services/LocalNavigationLoader"

import Navigation from "src/components/general/Navigation"

import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import Cat from "src/poc/Cat"

import getDecorators from "inversify-inject-decorators";

var container = new Container();

// **** SERVICES ****
container.bind<NavigationLoader>(SERVICE_IDENTIFIER.NAVIGATION_LOADER).to(LocalNavigationLoader).inSingletonScope();


// **** POC ****
container.bind<Pet>(SERVICE_IDENTIFIER.PET).to(Cat).inTransientScope();//.when(request => request.target.name.endsWith("cat"));

var { lazyInject } = getDecorators(container);

export { container, lazyInject }
