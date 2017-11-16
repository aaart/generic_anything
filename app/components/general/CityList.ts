import Vue from "vue";

export default Vue.extend({
    name: "city-list",
    props: {
        columnCount: {
            type: Number,
            default: 3
        }
    },
    data: function(): any {
        return { 
            cities: []
        };
    },
    methods: { 
        
    },
    computed: {
        
    },
    mounted: function(): void {
        this.cities = [{ name: "Lublin" }, { name: "New York" }, { name: "London" }, { name: "Tokyo" }];
    }
});
