import routes from 'routes';
import SearchBox from './../general/SearchBox.vue';
import CityList from './../general/CityList.vue';

let data = () => {
  return {
    msg: 'This is MainPage.vue'
  }
};

let path = '/';
let component = { 
    data,
    components: { SearchBox, CityList }
  };

routes.push({ path, component });

export default component;