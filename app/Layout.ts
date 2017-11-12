import Vue from "vue";

import Navigation from "./components/general/Navigation"
import MainHeader from "./components/general/MainHeader"

export default Vue.extend({
  name: 'layout',
  data: function(): any {
    return {
    }
  },
  components: { Navigation, MainHeader }
});