<template>
  <div>
    <h1>{{ msg }}</h1>
    <timezones-logo></timezones-logo>
    <h2>Timezones</h2>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TimezonesLogo from './components/general/TimezonesLogo.vue'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'Artur says hi!'
    }
  },
  components: { TimezonesLogo }
}
</script>

