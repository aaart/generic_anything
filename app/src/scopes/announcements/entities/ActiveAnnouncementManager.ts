import { injectable } from "inversify.config"
import Announcement from "scopes/announcements/entities/Announcement"
import * as _ from "lodash"

interface AnnouncementItem {
    id: number;
    item: Announcement;
}

@injectable()
export default class ActiveAnnouncementManager {
    private announcements: Array<Announcement> = new Array<Announcement>();
    private announcementItems: Array<AnnouncementItem> = new Array<AnnouncementItem>();

    public announcementTTL: number = 10000;

    public get activeAnnouncements() {
        return this.announcements;
    }

    public add(announcement: Announcement): void {
        var id: number = _.now();
        this.announcementItems.push({
            id: id,
            item: announcement
        });
        this.recalculateAnnouncements();
        var _this = this;
        setTimeout(
            () => {
                var itemId = id;
                _.remove(_this.announcementItems, item => item.id === itemId);
                _this.recalculateAnnouncements();
            }, 
            this.announcementTTL);
    }

    private recalculateAnnouncements(): void {
        _.remove(this.announcements, () => true);
        this.announcements.push(...this.announcementItems.map(x => x.item));
    }
}