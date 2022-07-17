<template>
  <!-- template 안에 최상위 HTML 태그가 하나만 있어야 한다! -->
  <div>
    <app-header v-on:renew="renewStr" v-bind:str="str"></app-header>
    {{str}}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader },
  methods: {
    renewStr: function() {
      this.str = 'ff';
    }
  },
  data: function() {
    return {
      str: 'hello header im your parent'
    }
  }
}
</script>

<style>

</style>