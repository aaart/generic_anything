import NavigationItem from "dataTypes/NavigationItem";

export default interface NavigationLoader {
    (): Array<NavigationItem>;
}