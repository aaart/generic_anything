import AnnouncementLevel from "scopes/announcements/enum/AnnouncementLevel"

export default class ErrorInstance {
    constructor(message: string, level?: AnnouncementLevel) {
        this.message = message;
        this.level = level ? level : AnnouncementLevel.INFO;
    }

    public message: string;
    public level: AnnouncementLevel;
}