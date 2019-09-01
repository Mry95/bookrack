<template>
    <div class="wrap">
        <div class="top">
            <router-link tag="span" to="/bookrack/myrack">我的书架</router-link>
            <router-link tag="span" to="/bookrack/lately">最近阅读</router-link>
        </div>
        <div class="conten">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState(['list'])
        },
        methods:{
            ...mapMutations(['changeFlag'])
        }
    }
</script>

<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display: flex;
            margin-top: 20px;
            span{
                text-align: center;
                flex: 1;
                border-radius: 5px;
                border: 3px transparent solid;
                &.router-link-active{
                    border-bottom: 3px solid rgb(94, 32, 32);
                    border-top: 3px solid rgb(94, 32, 32);
                }
            }
        }
    }
</style>