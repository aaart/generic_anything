import NavigationItem from "app/dataTypes/NavigationItem";

export default interface NavigationLoader {
    (): Array<NavigationItem>;
}