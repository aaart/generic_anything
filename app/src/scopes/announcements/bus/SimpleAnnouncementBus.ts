import { injectable } from "inversify.config"
import * as _ from "lodash"

import AnnouncementBus from "./AnnouncementBus"
import Subscriber from "scopes/announcements/entities/Subscriber"
import Announcement from "scopes/announcements/entities/Announcement"


@injectable()
export default class SimpleAnnouncementBus implements AnnouncementBus {

    private subscribers: Array<Subscriber> = new Array<Subscriber>();

    public publish(announcement: Announcement): void {
        if (this.subscribers.length == 0) {
            console.warn("[SimpleAnnouncementBus] No Subscribers registered!");
        }
        this.subscribers.forEach(
            subscriber => {
                subscriber.handler(announcement);
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