export default class NavigationItem {
    public constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    public name: string;
    public url: string;
}