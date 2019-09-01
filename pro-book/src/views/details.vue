<template>
    <div>
        <dl>
            <dt><img :src="item1.coverUrl" alt="">
            </dt>
            <dd>
                <h3>《{{item1.bookName}}》</h3>
                <p>作者：{{item1.authorName}}</p>
                <p>最新：{{item1.updteChapterName}}</p>
                <p class="text">简介：{{item1.description}}</p>
            </dd>
        </dl>
        <button @click="changeAddList({id:$route.params.id,index:defaultIndex})">加入书架</button>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                item1:{},
            }
        },
        computed: {
            ...mapState(['defaultIndex','addList'])
        },
        methods: {
            ...mapMutations(['changeAddList'])
        },
        created(){
            
            axios.get(`/details?id=${this.$route.params.id}&index=${this.defaultIndex}`).then(res=>{
                console.log(res)
                this.item1=res.data[0];
            })
        }
    }
</script>

<style lang="less" scoped>
    
</style>