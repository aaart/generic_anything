import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config'
import AnnouncementBus from 'scopes/announcements/bus/AnnouncementBus';
import Announcement from 'scopes/announcements/entities/Announcement';
import AnnouncementLevel from 'scopes/announcements/const/AnnouncementLevel';

@Component
export default class AnnouncementPublisherVieModel extends Vue {
    
    @lazyInject(SERVICE_IDENTIFIER.ANNOUNCEMENT_BUS)
    private announcementBus: AnnouncementBus;

    public levels: Array<string> = Object.keys(AnnouncementLevel).map(key => AnnouncementLevel[key])

    public message: string = '';
    public selectedLevel: string = "INFO";

    public get canPublish(): boolean {
        return !!this.message && this.message !== '';
    }

    public publishClicked(): void {
        this.announcementBus.publish(new Announcement(this.message, this.selectedLevel));
    }

}