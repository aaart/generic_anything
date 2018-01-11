import Vue from 'vue'
import Component from 'vue-class-component'
import * as _ from "lodash"
import Button from 'scopes/about/entities/Button';
import ButtonCollection from 'scopes/about/entities/ButtonCollection';
import AboutService from 'scopes/about/services/AboutService';
import { lazyInject, SERVICE_IDENTIFIER } from 'inversify.config';

@Component
export default class AboutViewModel extends Vue {
    @lazyInject(SERVICE_IDENTIFIER.BUTTON_COLLECTION)
    public buttons: ButtonCollection;

    @lazyInject(SERVICE_IDENTIFIER.ABOUT_SERVICE)
    public aboutService: AboutService;
    
    public queryButtonClicked(code: string): void {
        this.buttons[code].inProgress = true;
        this.$forceUpdate();
    }

    

}