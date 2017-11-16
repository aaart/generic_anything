import Vue from "vue";
import SearchBox from './../general/SearchBox';
import CityList from './../general/CityList';

export default Vue.extend({
  name: "home-page",
  data: function(): any {
    return {
    }
  },
  components: { SearchBox, CityList }
});