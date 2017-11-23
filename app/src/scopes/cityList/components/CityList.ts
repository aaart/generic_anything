import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config'
import ServiceResponse from 'ServiceResponse'
import City from "scopes/cityList/dto/City"
import CityListService from 'scopes/cityList/services/CityListService'

@Component
export default class CityListViewModel extends Vue {

    @lazyInject(SERVICE_IDENTIFIER.CITY_LIST_SERVICE)
    private cityListService: CityListService;

    public cities: Array<City> = new Array<City>();

    public beforeMount(): void {
        var _this: CityListViewModel = this;
        this.cityListService.GetDefaults()
            .then(
                (response: ServiceResponse<Array<City>>): void => {
                    _this.cities.push(...response.data);
                }
            )
            .catch(rejected => { alert("caught!"); });
    }

}
