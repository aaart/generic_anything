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

var path = '/';

var data = () => {
  return {
    msg: 'This is Page.vue'
  }
};

var component = { data };

routes.push({ path, component });

export default component;
</script>

