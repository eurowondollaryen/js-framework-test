<template>
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
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      username: '',
      password: ''
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
    }
  }
}
</script>

<style>

</style>