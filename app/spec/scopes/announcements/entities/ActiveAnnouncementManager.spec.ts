import { expect } from "chai";
import Announcement from "scopes/announcements/entities/Announcement"
import ActiveAnnouncementManager from "scopes/announcements/entities/ActiveAnnouncementManager"

describe("Active Announcement Manager", () => {
    it("Expect annoucement count incremented", () => {
        var manager: ActiveAnnouncementManager = new ActiveAnnouncementManager();
        var startingCount = manager.activeAnnouncements.length;
        manager.add(new Announcement("tst"));
        expect(manager.activeAnnouncements.length).to.be.equal(startingCount + 1);
    });
});

describe("Active Announcement Manager", () => {
    it("Expect annoucement removed when TTL passes", done => {
        var manager: ActiveAnnouncementManager = new ActiveAnnouncementManager();
        manager.announcementTTL = 500;
        manager.add(new Announcement(""));
        setTimeout(function() { 
            expect(manager.activeAnnouncements.length).to.be.equal(0);
            done();
        }, 
        550);
    });
});