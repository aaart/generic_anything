import City from "scopes/cityList/dto/City";
import ServiceResponse from "ServiceResponse";

export default interface CityListService {
    GetDefaults(): Promise<ServiceResponse<Array<City>>>;
}