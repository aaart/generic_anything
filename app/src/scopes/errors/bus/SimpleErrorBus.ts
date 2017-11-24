import { injectable } from "inversify.config"
import * as _ from "lodash"

import ErrorBus from "./ErrorBus"
import Subscriber from "./Subscriber"


@injectable()
export default class SimpleErrorBus implements ErrorBus {

    private subscribers: Array<Subscriber> = new Array<Subscriber>();

    public publish(message: string): void {
        this.subscribers.forEach(
            subscriber => {
                subscriber.handler(message);
            }
        ); 
    }

    public registerSubscriber(subscriber: Subscriber): void {
        if (this.subscribers.findIndex(s => s.name === subscriber.name) != -1) {
            throw new Error("Provided subscriber is already registered!");
        }
        this.subscribers.push(subscriber);
    }
    
}