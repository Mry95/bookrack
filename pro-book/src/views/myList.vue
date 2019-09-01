<template>
    <div class="wrap">
        <div class="list">
            
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
            ...mapState([])
        },
        methods:{
            ...mapMutations([])
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