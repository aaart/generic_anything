import { expect } from "chai"
import Subscriber from "scopes/announcements/entities/Subscriber";
import Announcement from "scopes/announcements/entities/Announcement";
import AnnouncementBus from "scopes/announcements/bus/AnnouncementBus";
import AnnouncementBox from "scopes/announcements/components/AnnouncementBox.vue"
import AnnouncementBoxModel from "scopes/announcements/components/AnnouncementBox"
import { container, SERVICE_IDENTIFIER } from "inversify.config"
import { mountApp } from "specTools"

describe("AnnouncementBox.vue", () => {
    it("Expect received annoucement count incremented", () => {
        var bus: AnnouncementBus = container.get<AnnouncementBus>(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS);
        var app = mountApp({
            template: "<announcement-box />",
            components: { "AnnouncementBox": AnnouncementBox }
        });
        var box: AnnouncementBoxModel = <AnnouncementBoxModel>app.$children[0];
        var startingCount = box.receivedAnnouncements.length;
        bus.publish(new Announcement("tst only"));

        expect(box.receivedAnnouncements.length).to.equal(startingCount + 1);

    });
});