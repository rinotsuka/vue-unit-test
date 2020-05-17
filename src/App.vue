<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div><input v-model="zip" name="zip" type="text" placeholder="郵便番号"></div>
    <ZipCode :zip="zip"/>
  </div>
</template>

<script>
import ZipCode from './components/ZipCode.vue';

export default {
  name: 'App',
  components: {
    ZipCode,
  },
  data() {
    return {
      zip: '',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
