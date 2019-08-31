<template>
    <div class="list">
        <dl v-for="(item) in latey" :key="item.bookId">
            <dt><img :src="item.coverUrl" alt=""></dt>
            <dd>
                <h3>《{{item.bookName}}》</h3>
                <p>作者：{{item.authorName}}</p>
                <p>最新：{{item.updteChapterName}}</p>
                <p>简介：{{item.description}}</p>
                <button v-if="flag" @click="deleteDataLateyItem(item.bookId)">删除</button>
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
                height: 200px;
                display: flex;
                overflow: hidden;
                dt{
                    width: 100px;
                    height: 180px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                dd{
                    flex: 1;
                    padding-left: 20px;
                    font-size: 12px;
                }
            }
        }
    }
</style>