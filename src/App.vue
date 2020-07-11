<template>
  <div id="app">
    <base-demo></base-demo>
    <base-list></base-list>
    <base-query></base-query>
    <base-js></base-js>
  </div>
</template>
<script>
import BaseDemo from './components/BaseDemo'
import BaseList from './components/BaseList'
import BaseQuery from './components/BaseQuery'
import BaseJs from './components/BaseJs'
export default {
  name: 'App',
  components: {
    BaseDemo,
    BaseList,
    BaseQuery,
    BaseJs
  }
}
</script>