import { Inject } from 'vue-inversify-decorator'
import { Vue, Component } from "vue-property-decorator";
import Pet from "app/poc/Pet"
import Dog from "app/poc/Dog"
import "reflect-metadata";
import SERVICE_IDENTIFIER from "ServiceIdentifier"

@Component
export default class PoCPageViewModel extends Vue {
    
    @Inject(SERVICE_IDENTIFIER.PET)
    pet: Pet;

    public testClicked(): void {
        this.pet.MakeNoise();
    }
}