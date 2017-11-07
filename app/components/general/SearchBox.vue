<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-10">
        <input class="form-control input-lg" type="text" />
      </div>
      <div class="col-xs-2">
        <button class="btn btn-default btn-block center" type="button" v-on:click="search" >Go!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return { }
  },
  methods: {
    search: () => {
      alert("search clicked!");
    }
  }
}
</script>