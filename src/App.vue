<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App">hi there</HelloWorld>

    <h1>Filters</h1>
    <p>{{text | toUppercase}}</p>

    <br>
    {{title}}
    <input type="text" v-model="filterText">

    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
    <br>
    <app-list></app-list>


    <hr>

    <div class="container-fluid success">
      <div class="jumbotron">
        <h1></h1>
        <div class="row">
          <div class="col-3 col-sm-6 mb-5">
            <h2>Exercise 1</h2>
            <input type="text" v-model="textInputOne">
            <p>{{textInputOne | txtReverse }}</p>
          </div>


          <div class="col-3 col-sm-6 mb-5">
            <h2>Exercise 2</h2>
            <input type="text" v-model="textInputTwo">
            <p v-if="textInputTwo">{{textInputTwo | length }}</p>
          </div>


          <div class="col-3 col-sm-6 mb-5">
            <h2>Exercise 3</h2>
            <p>{{txtReverseComp}}</p>
          </div>

          <div class="col-3 col-sm-6 mb-5">
            <h2>Exercise 4</h2>
          </div>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/list.vue'
import {fruitMixin} from './fruitMixin'
import {myownmixin} from './Myownmixin'

export default {
  mixins:[fruitMixin,myownmixin],

  components: {
    HelloWorld,
    appList:List
  },
  data(){
    return{
        text:"Hello there",
        textInputOne:'',
        textInputTwo:'',
        textReverse:''

    }
  },
  filters:{
    toUppercase(value){
        return value.toUpperCase();
      },
      txtReverse(value){
      let splitString = value.split("");
      let reverseArray = splitString.reverse();
      let joinArray= reverseArray.join("");
      return joinArray;

      }

    }


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
