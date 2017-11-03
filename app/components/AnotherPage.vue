<template>
  <div>
    <ul>
        <li>{{ msg }}</li>
        <li><router-link to="/">Page</router-link></li>
    </ul>
  </div>
</template>

<script>
module.exports =  {
  name: 'another-page',
  data () {
    return {
      msg: 'This is AnotherPage.vue.'
    }
  }
}
</script>

