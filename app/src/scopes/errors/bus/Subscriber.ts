export interface SubscriptionHandler {
    (): void;
}

export default interface Subscriber {
    name: string;
    handler: SubscriptionHandler;
}