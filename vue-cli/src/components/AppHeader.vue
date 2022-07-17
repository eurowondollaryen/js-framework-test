<template>
  <header>
    <h1>Header {{str}}</h1>
    <button v-on:click="sendEvent">send</button>
    <button v-on:click="logStr">log the props value</button>
  </header>
</template>

<script>
export default {
    props: ['str'],//부모에서 v-bind로 가져오는 데이터들 리스트
    data: function() {
        return {
        };
    },
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        },
        logStr: function() {
            console.log(this.str);//props로 가져온 data는 일반 data처럼 접근할 수 있다.
        }
    }
}
</script>

<style>

</style>