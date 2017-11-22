import Vue from 'vue'
import Component from 'vue-class-component'

import Navigation from "./components/general/Navigation.vue"
import MainHeader from "./components/general/MainHeader.vue"

@Component({
  components: { Navigation, MainHeader }
})
export default class LayoutViewModel extends Vue {
    
}