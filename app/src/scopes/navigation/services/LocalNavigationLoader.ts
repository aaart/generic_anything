import NavigationLoader from "./NavigationLoader"
import NavigationItem from "scopes/navigation/dto/NavigationItem";
import { injectable } from "inversify";

@injectable()
export default class LocalNavigationLoader implements NavigationLoader {
    Load(): NavigationItem[] {
        return new Array<NavigationItem>(
            new NavigationItem("home", "Home"),
            new NavigationItem("about", "About")
        );
    }

}
