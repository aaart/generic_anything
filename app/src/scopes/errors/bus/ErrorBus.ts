import Subscriber from "./Subscriber";

export default interface ErrorBus {
    publish(message: string): void;

    registerSubscriber(subscriber: Subscriber): void;
}