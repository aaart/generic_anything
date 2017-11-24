export interface SubscriptionHandler {
    (message: string): void;
}

export default interface Subscriber {
    name: string;
    handler: SubscriptionHandler;
}