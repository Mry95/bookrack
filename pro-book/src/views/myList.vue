<template>
    <div class="wrap">
        <div class="list">
        <dl v-for="(item) in myList" :key="item.bookId">
            <dt><img :src="item.coverUrl" alt=""></dt>
            <dd>
                <h3>《{{item.bookName}}》</h3>
                <p>作者：{{item.authorName}}</p>
                <p>最新：{{item.updteChapterName}}</p>
                <p>简介：{{item.description}}</p>
                <button v-if="flag" @click="deleteDataListItem(item.bookId)">删除</button>
            </dd>
        </dl>
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
            ...mapState(['myList','flag'])
        },
        methods:{
            ...mapMutations(['deleteDataListItem'])
        }
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