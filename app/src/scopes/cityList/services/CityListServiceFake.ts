import { injectable } from "inversify";

import CityListService from "scopes/cityList/services/CityListService";
import City from "scopes/cityList/dto/City";
import ServiceResponse from "ServiceResponse";
import * as $ from "jquery";

@injectable()
export default class CityListServiceFake implements CityListService {
    public GetDefaults(): Promise<ServiceResponse<Array<City>>> {
        return $.ajax({
            method: "GET",
            url: "api/fake/cityList.json"
        }).promise();
    }
}