<template>
    <div class="wrap">
        <div class="list">
            <Item v-for="(item,index) in myBook" :key="index">
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
import {mapState,mapMutations,mapGetters} from 'vuex'
import Item from '@/components/item'
    export default {
        components:{
            Item
        },
        name: '',
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters(['myBook']),
        },
        methods:{
            ...mapMutations([])
        },
        created() {
            console.log(this.myBook)
        },
    }
</script>

<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        .list{
            width: 100%;
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
    }
</style>