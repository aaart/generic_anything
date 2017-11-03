<template>
  <div>
    <ul>
        <li>{{ msg }}</li>
        <li><router-link to="another">link to another page</router-link></li>
    </ul>
  </div>
</template>

<script>
import routes from 'routes'

var data = () => {
  return {
    msg: 'This is MainPage.vue'
  }
};

var path = '/';
var component = { data };

routes.push({ path, component });

export default component;
</script>

