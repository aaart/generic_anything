<template>
  <div>
    <ul>
        <li>{{ msg }}</li>
        <li><router-link to="/">link to page</router-link></li>
    </ul>
  </div>
</template>

<script>
import routes from 'routes'

var component = {
  url: "/another",
  name: 'another-page',
  data: function () {
    return {
      msg: 'This is AnotherPage.vue.'
    }
  }
};

routes.push({ path: component.url, component: component });


export default component
</script>

