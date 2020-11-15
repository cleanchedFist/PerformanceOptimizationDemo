<template>
  <div id="app">
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.3rem;
}
html, body {
  margin: 0;
}
.icon {
  font-family: icomoon;
  src: url('./assets/font/icomoon.ttf');
}

.icon-to::after {
	content: '\e901';
}
.icon-like::after {
	content: '\e900';
}
</style>
