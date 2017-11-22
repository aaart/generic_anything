import NavigationLoader from "./NavigationLoader"
import NavigationItem from "dataTypes/NavigationItem";
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
