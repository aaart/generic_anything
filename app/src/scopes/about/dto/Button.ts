export default class Button {
    public constructor(key: string, label: string) {
        this.key = key;
        this.label = label;
    }


    public key: string;
    public label: string;
    public inProgress: boolean;
}