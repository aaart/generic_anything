import Vue from 'vue'
import Component from 'vue-class-component'

import SearchBox from './../general/SearchBox.vue';
import CityList from './../general/CityList.vue';

@Component({
  components: { SearchBox, CityList }
})
export default class HomePageViewModel extends Vue {
  
}