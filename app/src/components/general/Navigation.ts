import { Vue, Component } from "vue-property-decorator";

@Component
export default class NavigationViewModel extends Vue {
    public menuOpened: boolean = false;

    public toggleMenu(): void {
        this.menuOpened = !this.menuOpened;
    }
}