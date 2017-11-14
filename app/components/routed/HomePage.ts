//import routes from 'routes';
import SearchBox from './../general/SearchBox';
import CityList from './../general/CityList';

let data = () => {
  return {
    msg: 'This is HomePage.vue'
  }
};

let path = '/';
let component = { 
    data,
    components: { SearchBox, CityList }
  };

//routes.push({ path, component });

export default component;