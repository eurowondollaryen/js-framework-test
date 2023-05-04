<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <ModalCommon v-if="showModal" @close="showModal = false">
      <!-- slot 속성 deprecated 임. -->
      <!-- slot의 역할: modal의 내용을 재정의한다. (header slot영역의 내용을 부모에서 재정의 -->
      <template v-slot:header>
        {{ headerValue }}
      </template>
    </ModalCommon>
  </div>
</template>

<script>
import ModalCommon from './common/ModalCommon.vue';
export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
      headerValue: "경고!",
    };
  },
  methods: {
    addTodo: function() {
      if(this.newTodoItem !== "") {
        this.$emit("addTodo", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
        return false;
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  },
  components: {
    ModalCommon
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>