<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <main-header></main-header>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view></router-view>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          
        </div>
      </div>
    </div>
</template>

<script>
import MainHeader from './components/general/MainHeader.vue'

export default {
  name: 'layout',
  data () {
    return {
    }
  },
  components: { MainHeader }
}
</script>

