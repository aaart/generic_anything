import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config'
import ServiceResponse from "infrastructure/service/generic/ServiceResponse"
import City from "scopes/cityList/dto/City"
import CityListService from 'scopes/cityList/services/CityListService'
import ServiceIdentifier from 'ServiceIdentifier';
import AnnouncementBus from 'scopes/announcements/bus/AnnouncementBus';
import Announcement from 'scopes/announcements/entities/Announcement';

@Component
export default class CityListViewModel extends Vue {

    @lazyInject(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS)
    private announcementBus: AnnouncementBus;

    @lazyInject(SERVICE_IDENTIFIER.CITY_LIST_SERVICE)
    private cityListService: CityListService;

    public cities: Array<City> = new Array<City>();

    public beforeMount(): void {
        var _this: CityListViewModel = this;
        this.cityListService.GetDefaults()
            .then(
                (response: ServiceResponse<Array<City>>): void => {
                    if (response.isOK) {
                        _this.cities.push(...response.data);
                    } else {
                        this.announcementBus.publish(new Announcement(response.Status));
                    }
                }
            )
            .catch(rejected => { alert("Transport layer error occured!"); });
    }

}
