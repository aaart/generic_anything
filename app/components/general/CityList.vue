<script src="./CityList.js" ></script>

<template>
  <div class="container-fluid">
    <div class="row" v-for="row in this.citiesInRows" :key="row.rowNumber">
        <div class="col-xs-4" v-for="city in row.cities" :key="city.name">
            <div class="tile">
                {{ city.name }}
            </div>
        </div>
    </div>
  </div>
</template>