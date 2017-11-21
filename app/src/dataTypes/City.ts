
export default class City {
    public constructor(init?:Partial<City>) {
        Object.assign(this, init);
    }

    public name: string;
}
