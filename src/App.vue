<template>
  <div id="app">
    <base-demo></base-demo>
    <base-key-name></base-key-name>
    <base-mode></base-mode>
    <base-mode-2></base-mode-2>
    <base-component></base-component>
  </div>
</template>
<script>
import BaseDemo from './components/BaseDemo'
import BaseKeyName from './components/BaseKeyName'
import BaseMode from './components/BaseMode'
import BaseMode2 from './components/BaseMode2'
import BaseComponent from './components/BaseComponent'
export default {
  name: 'App',
  components: {
    BaseDemo,
    BaseKeyName,
    BaseMode,
    BaseMode2,
    BaseComponent
  }
}
</script>