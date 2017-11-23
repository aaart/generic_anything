import NavigationItem from "scopes/navigation/dto/NavigationItem";

export default interface NavigationLoader {
    Load(): Array<NavigationItem>;
}