<script src="./CityList.ts" lang="ts"></script>

<template>
  <div class="container-fluid">
    <div class="row" >
        <div class="col-xs-12 col-md-6 col-lg-4 top-buffer-md inner-buffer-md" v-for="city in cities" :key="city.name">
            <div class="tile">
                {{ city.name }}
            </div>
        </div>
    </div>
  </div>
</template>