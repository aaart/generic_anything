import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config'
import AnnouncementBus from 'scopes/announcements/bus/AnnouncementBus';
import Announcement from 'scopes/announcements/entities/Announcement';
import Subscriber from 'scopes/announcements/entities/Subscriber';

@Component({
})
export default class AnnouncementBox extends Vue {

    @lazyInject(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS)
    private announcementBus: AnnouncementBus;

    /// *** REACTIVE DATA ***
    public receivedAnnouncements: Array<Announcement> = new Array<Announcement>();

    /// *** END OF REACTIVE DATA ***

    public get calcs(): Array<Announcement> {
        return this.receivedAnnouncements;
    }

    public beforeMount(): void {
        this.announcementBus.registerSubscriber({
            name: "announcement-box",
            handler: this.subscriptionHandler
        });
    }

    private subscriptionHandler(announcement: Announcement): void {
        this.receivedAnnouncements.push(announcement);
    }
}
