import { expect } from "chai"
import Subscriber from "scopes/announcements/entities/Subscriber";
import Announcement from "scopes/announcements/entities/Announcement";
import AnnouncementBus from "scopes/announcements/bus/AnnouncementBus";
import AnnouncementBox from "scopes/announcements/components/AnnouncementBox.vue"
import AnnouncementBoxViewModel from "scopes/announcements/components/AnnouncementBox"
import { container, SERVICE_IDENTIFIER } from "inversify.config"
import { mountApp } from "specTools"

describe("AnnouncementBox.vue", () => {
    it("Expect received annoucement count incremented", () => {
        var bus: AnnouncementBus = container.get<AnnouncementBus>(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS);
        var app = mountApp({
            template: "<announcement-box />",
            components: { "AnnouncementBox": AnnouncementBox }
        });
        var box: AnnouncementBoxViewModel = <AnnouncementBoxViewModel>app.$children[0];
        var startingCount = box.receivedAnnouncements.length;
        bus.publish(new Announcement("tst only"));
        expect(box.receivedAnnouncements.length).to.be.equal(startingCount + 1);
    });
});