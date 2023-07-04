import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'//vuex import해주기

//storage
const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; ++i) {
                if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

//store 
const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        headerText: "TODO it!",
        price: 100
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        },
        originalPrice(state) {
            return state.price;
        },
        doublePrice(state) {
            return state.price * 2;
        },
        triplePrice(state) {
            return state.price * 3;
        }
    },
    mutations: {
        /*
        * ES6에서 거의 대부분 자주 쓰는 Feature: arrow function, let/const
        */
        addOneItem(state, newTodoItem) {
            //값이 변경되지 않는 변수는 const를 사용
            const obj = {completed: false, item: newTodoItem};
            //localstorage는 object 저장을 지원하지 않기 때문에 string화를 한다.
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);//javascript 기본 api, 특정 index에서 원하는 개수만큼 제거 가능
            //slice: 기존배열을 제거하고 새로운 배열을 반환한다.
        },
        toggleCompleteOneItem(state, payload) {
            //todoItem.completed = !todoItem.completed 안티 패턴(좋지 않은 패턴. event로 올려준 데이터를 직접 수정하는 방식)
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //localStorage의 데이터를 갱신하는 부분
            localStorage.removeItem(payload.todoItem.item)
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});

createApp(App).use(store).mount('#app')