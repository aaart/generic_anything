import Vue from 'vue'
import Component from 'vue-class-component'
import SERVICE_IDENTIFIER from "ServiceIdentifier"
import NavigationLoader from "src/services/NavigationLoader"
import { lazyInject } from "inversify.config"

@Component({})
export default class NavigationViewModel extends Vue {
    
    @lazyInject(SERVICE_IDENTIFIER.NAVIGATION_LOADER)
    private navigationLoader: NavigationLoader;

    // *** REACTIVE DATA ****
    public menuOpened: boolean = false;

    public toggleMenu(): void {
        this.menuOpened = !this.menuOpened;
    }
}