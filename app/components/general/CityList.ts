export default {
    name: 'city-list',
    props: {
        cities: Array
    },
    data () {
      return { }
    },
    computed: {
      citiesInRows: () => {
        var columnCount = 3;
        var rows = [];
        // var rowStartingPoint = 0;
        // var rowNmber = 0;
        // if (this.cities) {
        //   while (rowStartingPoint < this.cities.length) {
        //     rows.push({ rowNumber: rowNmber, cities: [] });
        //     for (let i = 0; i < columnCount; i++) {
        //       let row = rows[rows.length - 1];
        //       row.cities.push(this.cities[rowStartingPoint + i]);
        //     }
        //     rowStartingPoint += columnCount;
        //     rowNmber++;
        //   }
        // }
        rows.push({ rowNmber: -1, cities: [ {name: "void"} ] });
        return rows;
      }
    },
    methods: {
      
    },  
    mounted() {
    }
  };