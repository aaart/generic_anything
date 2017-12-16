import ServiceResponseBase from "infrastructure/service/ServiceResponse";

export default class ServiceResponse<T> extends ServiceResponseBase {
    public data: T;
}