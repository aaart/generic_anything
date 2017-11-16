import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MainHeaderViewModel extends Vue {
  headerMessage = "Timezones";
}

// export default Vue.extend({
//   name: "main-header"
// });