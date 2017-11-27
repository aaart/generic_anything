import Announcement from "scopes/announcements/entities/Announcement"

export interface SubscriptionHandler {
    (announcement: Announcement): void;
}

export default interface Subscriber {
    name: string;
    handler: SubscriptionHandler;
}