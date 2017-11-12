import Vue from "vue"

export default Vue.extend({
    data: function(): any {
        return {
            menuOpened: false
        }
    },
    methods: {
        toggleButton: function(): void {
            this.menuOpened = !this.menuOpened;
        }
    }
});