import { Vue, Component } from "vue-property-decorator";

import SearchBox from './../general/SearchBox.vue';
import CityList from './../general/CityList.vue';

@Component({
  components: { SearchBox, CityList }
})
export default class HomePageViewModel extends Vue {
  
}