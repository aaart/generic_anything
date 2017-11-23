import Vue from 'vue'
import Component from 'vue-class-component'
import SERVICE_IDENTIFIER from "ServiceIdentifier"
import NavigationLoader from "scopes/navigation/services/NavigationLoader"
import NavigationItem from "scopes/navigation/dto/NavigationItem"
import { lazyInject } from "inversify.config"

@Component({})
export default class NavigationViewModel extends Vue {
    
    @lazyInject(SERVICE_IDENTIFIER.NAVIGATION_LOADER)
    private navigationLoader: NavigationLoader;

    // *** REACTIVE DATA ***
    public menuOpened: boolean = false;

    public navigationItems: Array<NavigationItem> = [];

    // *** [END] REACTIVE DATA ***

    public toggleMenu(): void {
        this.menuOpened = !this.menuOpened;
    }


    // *** LIFECYCLE HOOKS ***

    public beforeMount(): void {
        this.navigationItems = this.navigationLoader.Load();
    }

}