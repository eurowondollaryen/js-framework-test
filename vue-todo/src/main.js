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
        headerText: "TODO it!"
    }
});

createApp(App).use(store).mount('#app')