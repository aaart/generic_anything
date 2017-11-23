import Vue from 'vue'
import Component from 'vue-class-component'

import Navigation from "scopes/navigation/components/Navigation.vue"
import MainHeader from "scopes/mainHeader/components/MainHeader.vue"

@Component({
  components: { Navigation, MainHeader }
})
export default class LayoutViewModel extends Vue {
    
}