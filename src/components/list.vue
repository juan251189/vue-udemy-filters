<template>
  <div id="app">

    <h1>Filters</h1>


    <br>
    <input type="text" v-model="filterText">

    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>

    <hr>

  </div>
</template>

<script>
import {fruitMixin} from '../fruitMixin';

export default {
mixins:[fruitMixin]
  }

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
