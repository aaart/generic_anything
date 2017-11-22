import NavigationItem from "dataTypes/NavigationItem";

export default interface NavigationLoader {
    Load(): Array<NavigationItem>;
}