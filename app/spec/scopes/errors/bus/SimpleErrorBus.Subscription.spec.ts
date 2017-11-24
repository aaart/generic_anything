import { expect } from "chai"
import Subscriber from "scopes/errors/bus/Subscriber";
import SimpleErrorBus from "scopes/errors/bus/SimpleErrorBus";

describe("SimpleErrorBus.Subscription", () => {
    it("Should register with no error", () => {
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: () => { }
        };
        var bus: SimpleErrorBus = new SimpleErrorBus();
        expect(() => bus.registerSubscriber(subscriber)).to.not.throw();
    });
});