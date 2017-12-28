export default class ServiceResponse {
    public Status: string;

    public get isOK(): boolean {
        return this.Status === "OK";
    }
}