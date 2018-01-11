
import 'reflect-metadata';
import * as _ from 'lodash';
import { Container, injectable } from "inversify";
import getDecorators from "inversify-inject-decorators";
import SERVICE_IDENTIFIER from "ServiceIdentifier"

import AboutService from "scopes/about/services/AboutService";
import AboutServiceJson from "scopes/about/services/AboutServiceJson";

import ActiveAnnouncementManager from "scopes/announcements/entities/ActiveAnnouncementManager"

import AnnouncementBus from "scopes/announcements/bus/AnnouncementBus";
import SimpleAnnouncementBus from "scopes/announcements/bus/SimpleAnnouncementBus";

import ButtonCollection from './src/scopes/about/entities/ButtonCollection';
import DefaultButtonCollection from './src/scopes/about/entities/DefaultButtonCollection';

import CityListService from "src/scopes/cityList/services/CityListService";
import CityListServiceFake from "src/scopes/cityList/services/CityListServiceFake";
import CityListServiceJson from "src/scopes/cityList/services/CityListServiceJson";

import NavigationLoader from "scopes/navigation/services/NavigationLoader"
import LocalNavigationLoader from "scopes/navigation/services/LocalNavigationLoader"

import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import Cat from "src/poc/Cat"




// **** CODE STARTS HERE ****

var moduleContainer = new Container();

var registerComponents = (container: Container): void => {
    container.bind<AboutService>(SERVICE_IDENTIFIER.ABOUT_SERVICE).to(AboutServiceJson).inSingletonScope();
    container.bind<ActiveAnnouncementManager>(SERVICE_IDENTIFIER.ACTIVE_ANNOUNCEMENT_MANAGER).to(ActiveAnnouncementManager).inSingletonScope();
    container.bind<AnnouncementBus>(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS).to(SimpleAnnouncementBus).inSingletonScope();
    container.bind<ButtonCollection>(SERVICE_IDENTIFIER.BUTTON_COLLECTION).to(DefaultButtonCollection).inSingletonScope();
    container.bind<CityListService>(SERVICE_IDENTIFIER.CITY_LIST_SERVICE).to(CityListServiceJson).inSingletonScope();
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
    resetContainer,
    SERVICE_IDENTIFIER,
    injectable
}
