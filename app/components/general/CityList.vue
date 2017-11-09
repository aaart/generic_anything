<script src="./CityList.ts" lang="ts"></script>

<template>
  <div class="container-fluid">
    <div class="row top-buffer-md" v-for="row in citiesInRows" :key="row.rowNumber" >
        <div class="col-xs-4 inner-buffer-md" v-for="city in row.cities" :key="city.name">
            <div class="tile">
                {{ city.name }}
            </div>
        </div>
    </div>
  </div>
</template>