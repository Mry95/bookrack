import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        defaultIndex: 0,
        myList: [],
        latey: [],
        flag: false,
    },
    mutations: {
        getList(state, payload) {
            state.list = payload
        },
        changeIndex(state, payload) {
            state.defaultIndex = payload
        },
        getMyList(state, payload) {
            state.myList = payload
        },
        getMyLatey(state, payload) {
            state.latey = payload
        },
        changeFlag(state, payload) {
            state.flag = !state.flag
        },
        deleteDataListItem(state, payload) {
            state.myList = state.myList.filter(item => {
                if (item.bookId != payload) {
                    return item
                }
            })
            console.log(state.myList)
        },
        deleteDataLateyItem(state, payload) {
            state.latey = state.latey.filter(item => {
                if (item.bookId != payload) {
                    return item
                }
            })
            console.log(state.latey)
        }
    },

    actions: {
        getData({ commit }) {
            axios.get('/list').then(res => {
                commit('getList', res.data);
                commit('getMyList', res.data.ranklist0);
                commit('getMyLatey', res.data.ranklist1);
            })
        }
    }
})