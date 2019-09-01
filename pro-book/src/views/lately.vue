<template>
    <div class="list">
        <dl v-for="(item) in latey" :key="item.bookId">
            <router-link tag="dt" :to="{name:'details',params:{id:item.bookId}}"><img :src="item.coverUrl" alt=""></router-link>
            <dd>
                <h3>《{{item.bookName}}》</h3>
                <p>作者：{{item.authorName}}</p>
                <p>最新：{{item.updteChapterName}}</p>
                <p class="text">简介：{{item.description}}</p>
                <button v-if="flag" @click.capture="deleteDataLateyItem(item.bookId)">删除</button>
            </dd>
        </dl>
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
            ...mapState(['latey','flag'])
        },
        methods:{
            ...mapMutations(['deleteDataLateyItem'])
        }
    }
</script>

<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        overflow-y: auto;
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
                    overflow: hidden;
                    padding-left: 20px;
                    
                    position: relative;
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