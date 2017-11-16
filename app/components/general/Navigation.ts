import { Vue, Component } from "vue-property-decorator";

@Component
export default class NavigationVieModel extends Vue {
    public menuOpened: boolean = false;

    public toggleMenu(): void {
        this.menuOpened = !this.menuOpened;
    }
}

// export default Vue.extend({
//     data: function(): any {
//         return {
//             menuOpened: false
//         }
//     },
//     methods: {
//         toggleMenu(): void {
//             this.menuOpened = !this.menuOpened;
//         }
//     }
// });