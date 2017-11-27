import { expect } from "chai"
import Subscriber from "scopes/announcements/entities/Subscriber";
import Announcement from "scopes/announcements/entities/Announcement";
import SimpleAnnouncementBus from "scopes/announcements/bus/SimpleAnnouncementBus";

describe("SimpleAnnouncementBus.Subscription", () => {
    it("Should register with no error", () => {
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (announcement: Announcement) => { }
        };
        var bus: SimpleAnnouncementBus = new SimpleAnnouncementBus();
        expect(() => bus.registerSubscriber(subscriber)).to.not.throw();
    });
});

describe("SimpleAnnouncementBus.Subscription", () => {
    it("Should throw error when subscriber name is already registred.", () => {
        var subscriber1: Subscriber = {
            name: "test subscriber",
            handler: (announcement: Announcement) => { }
        };
        var subscriber2: Subscriber = {
            name: "test subscriber",
            handler: (announcement: Announcement) => { }
        };
        var bus: SimpleAnnouncementBus = new SimpleAnnouncementBus();
        expect(() => bus.registerSubscriber(subscriber1)).to.not.throw();
        expect(() => bus.registerSubscriber(subscriber2)).to.throw(/[Pp]rovided subscriber is already registered/);
    });
});

describe("SimpleAnnouncementBus.Subscription", () => {
    it("Should not invoke registered subscriber when error is not published.", () => {
        var handlerCalled: boolean = false;
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (announcement: Announcement) => { handlerCalled = true; }
        };
        var bus: SimpleAnnouncementBus = new SimpleAnnouncementBus();
        bus.registerSubscriber(subscriber);
        
        expect(handlerCalled).to.be.false;
    });
});

describe("SimpleAnnouncementBus.Subscription", () => {
    it("Should invoke registered subscriber when error is published.", () => {
        var handlerCalled: boolean = false;
        var subscriber: Subscriber = {
            name: "test subscriber",
            handler: (announcement: Announcement) => { handlerCalled = true; }
        };
        var bus: SimpleAnnouncementBus = new SimpleAnnouncementBus();
        bus.registerSubscriber(subscriber);
        bus.publish(new Announcement("msg"));
        expect(handlerCalled).to.be.true;
    });
});


