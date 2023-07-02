<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,//기본적인 Vue 스타일 가이드: pascal case (TodoHeader)
    TodoInput,//권고방식: todo-header
    TodoList,
    TodoFooter
  },
  data: function() {
    return {
    }
  },
  created: function() {
    
  },
  methods: {
    // addOneItem(newTodoItem) {
    //   //값이 변경되지 않는 변수는 const를 사용
    //   const obj = {completed: false, item: newTodoItem};
    //   //localstorage는 object 저장을 지원하지 않기 때문에 string화를 한다.
    //   localStorage.setItem(newTodoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);//javascript 기본 api, 특정 index에서 원하는 개수만큼 제거 가능
    //   //slice: 기존배열을 제거하고 새로운 배열을 반환한다.
    // },
    // toggleCompleteOneItem(todoItem, index) {
    //   //todoItem.completed = !todoItem.completed 안티 패턴(좋지 않은 패턴. event로 올려준 데이터를 직접 수정하는 방식)
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   //localStorage의 데이터를 갱신하는 부분
    //   localStorage.removeItem(todoItem.item)
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
