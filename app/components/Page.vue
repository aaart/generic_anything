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

var component = {
  url: "/",
  name: 'page',
  data: function () {
    return {
      msg: 'This is Page.vue.'
    }
  }
};

routes.push({ path: component.url, component: component });

export default component;
</script>

