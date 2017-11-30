import Vue from 'vue'
import Component from 'vue-class-component'

import AnnouncementPublisher from "scopes/announcements/components/AnnouncementPublisher.vue"
import CityList from 'scopes/cityList/components/CityList.vue';

@Component({
  components: { AnnouncementPublisher, CityList }
})
export default class HomePageViewModel extends Vue {
  
}