import Vue from "vue";
import * as _ from "lodash";

export default Vue.extend({
    name: "city-list",
    props: {
        columnCount: {
            type: Number,
            default: 3
        }
    },
    data(): any {
        return { 
            cities: [{ name: "Lublin" }, { name: "New York" }, { name: "London" }, { name: "Tokyo" }]
        };
    },
    methods: { },
    computed: {
        citiesInRows: function(): Array<any> {
            var fullRowCount = this.cities.length / this.columnCount;
            var rowCount = Math.floor(fullRowCount) + (fullRowCount % 1 == 0 ? 0 : 1);
            return _.range(rowCount)
                .map(rowNumber => {
                    var startingPoint = rowNumber * this.columnCount;
                    return {
                        rowNumber,
                        cities: this.cities.slice(startingPoint, startingPoint + this.columnCount)
                    };
            });
        }
    }
});

// export default {
//     ,
//     props: {
//         cities: Array
//     },
//     data () {
//       return { }
//     },
//     computed: {
//       citiesInRows: () => {
//         var columnCount = 3;
//         var rows = [];
//         // var rowStartingPoint = 0;
//         // var rowNmber = 0;
//         // if (this.cities) {
//         //   while (rowStartingPoint < this.cities.length) {
//         //     rows.push({ rowNumber: rowNmber, cities: [] });
//         //     for (let i = 0; i < columnCount; i++) {
//         //       let row = rows[rows.length - 1];
//         //       row.cities.push(this.cities[rowStartingPoint + i]);
//         //     }
//         //     rowStartingPoint += columnCount;
//         //     rowNmber++;
//         //   }
//         // }
//         rows.push({ rowNmber: -1, cities: [ {name: "void"} ] });
//         return rows;
//       }
//     },
//     methods: {
      
//     },  
//     mounted() {
//     }
//   };