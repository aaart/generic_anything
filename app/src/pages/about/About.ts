import Vue from 'vue'
import Component from 'vue-class-component'
import * as _ from "lodash"
import Button from 'scopes/about/dto/Button';

@Component
export default class AboutViewModel extends Vue {
    private buttons: { [id: string] : Button } = {
        ["now"]: new Button("now", "Now"),

    };
    
    public queryButtonClicked(queryKey: string): void {
        
    }

}