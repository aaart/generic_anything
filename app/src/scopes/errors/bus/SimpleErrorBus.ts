import { injectable } from "inversify.config"

import ErrorBus from "./ErrorBus"
import Subscriber from "./Subscriber"

@injectable()
export default class SimpleErrorBus implements ErrorBus {
    public publish(message: string): void {
    }

    public registerSubscriber(subscriber: Subscriber): void {
    }
    
}