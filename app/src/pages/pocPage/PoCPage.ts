import Vue from 'vue'
import Component from 'vue-class-component'
import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import SERVICE_IDENTIFIER from "ServiceIdentifier"
import { lazyInject } from "inversify.config"

@Component({})
export default class PoCPageViewModel extends Vue {
    
    @lazyInject(SERVICE_IDENTIFIER.PET)
    private pet: Pet;

    public message: string = "empty";


    public beforeMount(): void {
        this.message = this.pet ? this.pet.MySound : "DEFAULT";
    }
}