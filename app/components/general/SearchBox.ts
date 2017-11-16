import Vue from "vue";

export default Vue.extend({
    props: {
        message: {
            type: String,
            default: "default message"
        }
    },
    data: function(): any {
        return {
            anotherMessage: this.message.default
        };
    },
    methods: {
        searchClicked(): void {
            this.anotherMessage = this.message + " another.";
        }
    }
});
