import Subscriber from "scopes/announcements/entities/Subscriber";
import Announcement from "scopes/announcements/entities/Announcement";


export default interface AnnouncementBus {
    publish(announcement: Announcement): void;

    registerSubscriber(subscriber: Subscriber): void;
}