<template>
  <div>
    <ul>
        <li>{{ msg }}</li>
        <li><router-link to="another">Another page</router-link></li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: 'page',
  data () {
    return {
      msg: 'This is Page.vue.'
    }
  }
}
</script>

