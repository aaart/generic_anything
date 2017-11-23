import Vue from 'vue'
import Component from 'vue-class-component'
import City from "scopes/cityList/dto/City"

@Component
export default class CityListViewModel extends Vue {

    public cities: Array<City> = new Array<City>();

    public mounted(): void {
        this.cities.push(new City ({ name: "Lublin" }));
        this.cities.push(new City ({ name: "New York" }));
        this.cities.push(new City ({ name: "London" }));
        this.cities.push(new City ({ name: "Tokyo" }));
    }

}
