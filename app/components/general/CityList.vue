<script src="./CityList.ts" lang="ts"></script>

<template>
  <div class="container-fluid">
    <!-- !!!!! 3 means column count here!!!!! -->
    <div class="row top-buffer-md" v-for="(number, index) in Math.floor(cities.length / 3) + Number((cities.length / 3) % 1 != 0)" :key="number" >
        <div class="col-xs-4 inner-buffer-md" v-for="city in cities.slice(3 * index, 3 * index + 3)" :key="city.name">
            <div class="tile">
                {{ city.name }}
            </div>
        </div>
    </div>
  </div>
</template>