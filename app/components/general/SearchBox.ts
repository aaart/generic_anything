import Vue from "vue";

export default Vue.extend({
    props: {
        message: {
            type: String,
            default: "default message"
        }
    },
    data(): any {
        return {
            anotherMessage: this.message.default
        };
    },
    methods: {
        searchClicked(): void {
            console.log(this.message);
            this.anotherMessage = this.message + " another.";
            console.log(this.anotherMessage);
        }
    }
});
