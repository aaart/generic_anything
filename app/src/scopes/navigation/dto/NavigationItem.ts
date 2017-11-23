export default class NavigationItem {
    public constructor(name: string, displayName: string) {
        this.name = name;
        this.displayName = displayName;
    }

    public name: string;
    public displayName: string;
}