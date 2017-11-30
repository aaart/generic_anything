import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config'
import AnnouncementBus from 'scopes/announcements/bus/AnnouncementBus';
import Announcement from 'scopes/announcements/entities/Announcement';
import ActiveAnnouncementManager from 'scopes/announcements/entities/ActiveAnnouncementManager';

@Component({})
export default class AnnouncementBox extends Vue {

    @lazyInject(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS)
    private announcementBus: AnnouncementBus;

    @lazyInject(SERVICE_IDENTIFIER.ACTIVE_ANNOUNCEMENT_MANAGER)
    private announcementManager: ActiveAnnouncementManager;

    /// *** REACTIVE DATA ***
    public receivedAnnouncements: Array<Announcement> = this.announcementManager.activeAnnouncements;
    /// *** END OF REACTIVE DATA ***

    /// *** COMPUTED ***
    /// END OF COMPUTED

    public beforeMount(): void {
        var _this = this;
        this.announcementBus.registerSubscriber({
            name: "announcement-box",
            handler: announcement => {
                _this.announcementManager.add(announcement);
            }
        });
    }
}
