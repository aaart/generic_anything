import { Vue, Component, Prop } from "vue-property-decorator";
import City from "./../../dataTypes/City"

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
