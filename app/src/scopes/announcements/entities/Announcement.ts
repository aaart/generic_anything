import AnnouncementLevel from "scopes/announcements/const/AnnouncementLevel"

export default class Announcement {
    constructor(message: string, level?: string) {
        this.message = message;
        this.level = level ? level : AnnouncementLevel.INFO;
    }

    public message: string;
    public level: string;
}