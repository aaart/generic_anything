import Vue from 'vue'
import Component from 'vue-class-component'

import SearchBox from 'scopes/searchBox/components/SearchBox.vue';
import CityList from 'scopes/cityList/components/CityList.vue';

@Component({
  components: { SearchBox, CityList }
})
export default class HomePageViewModel extends Vue {
  
}