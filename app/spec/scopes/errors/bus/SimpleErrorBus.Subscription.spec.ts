import { expect } from "chai"
import Subscriber from "scopes/errors/bus/Subscriber";
import SimpleErrorBus from "scopes/errors/bus/SimpleErrorBus";

describe("SimpleErrorBus.Subscription", () => {
    it("Should register with no error", () => {
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (message: string) => { }
        };
        var bus: SimpleErrorBus = new SimpleErrorBus();
        expect(() => bus.registerSubscriber(subscriber)).to.not.throw();
    });
});

describe("SimpleErrorBus.Subscription", () => {
    it("Should throw error when subscriber name is already registred.", () => {
        var subscriber1: Subscriber = {
            name: "test subscriber",
            handler: (message: string) => { }
        };
        var subscriber2: Subscriber = {
            name: "test subscriber",
            handler: (message: string) => { }
        };
        var bus: SimpleErrorBus = new SimpleErrorBus();
        expect(() => bus.registerSubscriber(subscriber1)).to.not.throw();
        expect(() => bus.registerSubscriber(subscriber2)).to.throw(/[Pp]rovided subscriber is already registered/);
    });
});

describe("SimpleErrorBus.Subscription", () => {
    it("Should not invoke registered subscriber when error is not published.", () => {
        var handlerCalled: boolean = false;
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (message: string) => { handlerCalled = true; }
        };
        var bus: SimpleErrorBus = new SimpleErrorBus();
        bus.registerSubscriber(subscriber);
        
        expect(handlerCalled).to.be.false;
    });
});

describe("SimpleErrorBus.Subscription", () => {
    it("Should invoke registered subscriber when error is published.", () => {
        var handlerCalled: boolean = false;
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (message: string) => { handlerCalled = true; }
        };
        var bus: SimpleErrorBus = new SimpleErrorBus();
        bus.registerSubscriber(subscriber);
        bus.publish("msg");
        expect(handlerCalled).to.be.true;
    });
});


