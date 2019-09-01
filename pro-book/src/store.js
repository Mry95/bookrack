import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [], //用来放总数居
        defaultIndex: 0, //用来设置默认样式的默认下表
        itemList: [], //热门列表
        addList: [], //我的书架列表
        flag: false, //插旗
        myBook: [], //我的书架数据
    },
    mutations: {
        //获取总数居
        getList(state, payload) {
            state.list = payload
        },
        //改变默认下表的方法
        changeIndex(state, payload) {
            state.defaultIndex = payload
        },
        //通过下标获取列表数据
        getItemList(state, payload) {
            state.itemList = payload
        },
        //执行的时候改变该子项的状态
        changeAddList(state, { id, index }) {
            state.list['ranklist' + index] = state.list['ranklist' + index].map(item => {
                if (item.bookId == id) {
                    item.serialStatus = 1
                }
                return item
            });
            console.log(state.list)
        },


        //改变默认插旗
        changeFlag(state, payload) {
            state.flag = !state.flag
        },
        //删除列表单项
        deleteDataListItem(state, payload) {
            state.myList = state.myList.filter(item => {
                if (item.bookId != payload) {
                    return item
                }
            })
        },
        //删除列表单项
        deleteDataLateyItem(state, payload) {
            state.latey = state.latey.filter(item => {
                if (item.bookId != payload) {
                    return item
                }
            })
        }
    },
    getters: {
        myBook(state, payload) {
            console.log(state)
            let arr = [];
            for (let k in state.list) {
                arr = [...state.list[k].filter(item => item.serialStatus)]
            }
            return arr
        }
    },
    actions: {
        getItemList({ commit }, index) {
            axios.get('/itemList?index=' + index).then(res => {
                commit('getItemList', res.data)
            })
        },
        getData({ commit }) {
            axios.get('/list').then(res => {
                commit('getList', res.data);
            })
        }
    }
})