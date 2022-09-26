<template>
  <div>
    <h3>1. form submit test</h3>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
  <div>
    <h3>2. tab menu test</h3>
    <!-- tab menu test -->
    <button v-on:click="switchTab('TabOne')">tab1</button>
    <button v-on:click="switchTab('TabTwo')">tab2</button>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
  <div>
    <h3>3. v-for test</h3>
    <div>
      <div v-for="item in loopArray" v-bind:key="item">
        {{item}}
      </div>
    </div>
  </div>
  <div>
    <h3>4. HTML to canvas render test</h3>
    <button v-on:click="renderCanvas('hello')">canvas render</button>
    <div id="hello">hello</div>
  </div>
  <div>
    <h3>5. tree Menu test</h3>
  </div>
</template>

<script>
import axios from 'axios';
import TabOne from './components/TabOne.vue';
import TabTwo from './components/TabTwo.vue';
import html2canvas from 'html2canvas';

export default {
  components: {
    TabOne,
    TabTwo
  },
  data: function() {
    return {
      username: '',
      password: '',
      currentTabComponent: "TabTwo",
      loopArray: [1, 2, 3]
    };
  },
  methods: {
    submitForm: function() {
      //event.preventDefault();//form의 기본 성질인 submit 시 새로고침을 막는다.
      //vue에서 제공하는 기능: v-on:submit.prevent
      console.log(this.username);
      console.log(this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    switchTab: function(tabName) {
      this.currentTabComponent = tabName;
    },
    renderCanvas: function(elementId) {
      html2canvas(document.getElementById(elementId)).then(function(canvas) {
        document.getElementById(elementId).appendChild(canvas);
      });
    }
  }
}
</script>

<style>

</style>