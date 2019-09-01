<template>
    <div>
        <div class="top">
            <span @click="changeCurrt(index)" :class="defaultIndex==index?'active':''" v-for="(item,index) in listName" :key="index">{{item}}</span>
        </div>
        <div class="content">
            <Item v-for="(item,index) in itemList" :key="index">
                <router-link tag="dt" :to="{name:'details',params:  {id:item.bookId}}"><img :src="item.coverUrl" alt="">
                </router-link>
                <dd>
                    <h3>《{{item.bookName}}》</h3>
                    <p>作者：{{item.authorName}}</p>
                    <p>最新：{{item.updteChapterName}}</p>
                    <p class="text">简介：{{item.description}}</p>
                </dd>
            </Item>
        </div>
        
    </div>
</template>

<script>
import Item from '@/components/item'
import {mapState,mapMutations,mapActions} from 'vuex';

    export default {
        components:{
            Item
        },
        name:'cls',
        data() {
            return {
                listName:['热门','新书','免费','完本'],//分类tab title
                currt:0,//设置默认下标
            }
        },
        computed: {
            ...mapState(['defaultIndex','itemList'])
        },
        methods: {
            ...mapActions(['getItemList']),
            ...mapMutations(['changeIndex']),
            //点击标题tab 通过改变currt 来赋予选中样式，顺便渲染对应内容
            changeCurrt(index){
                //这个方法是创库里改变下表的方法
                this.changeIndex(index);
                //获取对应标题的数据
                this.getItemList(index)
            }
        },
        created(){
            //获取默认数据
            this.getItemList(this.defaultIndex);
        }
    }
</script>

<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .top{
        width: 100%;
        height: 50px;
        display: flex;
        padding: 8px 10px;
        justify-content: space-around;
        span{
            padding:0 20px;
            display: block;
            -webkit-box-flex: 1;
            text-align: center;
            color: #4c4c4c;
            border-radius: 3px;
            height: 35px;
            line-height: 35px;
            font-size: 13px;
            background: #f2f2f2;
            margin: 5px;
            &.active{
                color: #fff;
                background: #ff4544;
            }
        }
    }
    .content{
        flex: 1;
        dl{
                width: 100%;
                height: 120px;
                display: flex;
                overflow: hidden;
                padding: 10px;
                dt{
                    width: 100px;
                    height: 100px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dd{
                    flex: 1;
                    padding-left: 20px;
                   
                    position: relative;
                    overflow: hidden;
                    .text{
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    button{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
            }
    }
</style>