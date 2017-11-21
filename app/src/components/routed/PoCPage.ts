import { Inject } from 'vue-inversify-decorator'
import { Vue, Component } from "vue-property-decorator";
import Pet from "src/poc/Pet"
import Dog from "src/poc/Dog"
import SERVICE_IDENTIFIER from "ServiceIdentifier"

@Component({
    name: "PoCPage"
})
export default class PoCPageViewModel extends Vue {
    
    @Inject(SERVICE_IDENTIFIER.PET)
    pet: Pet;

    public message: string = "empty";


    public beforeMount(): void {
        this.message = this.pet ? this.pet.MySound : "DEFAULT";
    }
}