import Vue from "vue"

export default Vue.extend({
    data: function(): any {
        return {
            menuOpened: false
        }
    },
    methods: {
        toggleMenu: function(): void {
            this.menuOpened = !this.menuOpened;
        }
    }
});