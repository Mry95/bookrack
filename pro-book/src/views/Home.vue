<template>
    <div class="wrap">
        <swiper>
            <swiperSlide><img src="../assets/140403143215-0.jpg" alt=""></swiperSlide>
            <swiperSlide><img src="../assets/140405113517-9.jpg" alt=""></swiperSlide>
        </swiper>
        <button>免费专区</button>
        <button>女频精选</button>

    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components:{
            swiper,
            swiperSlide
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    .swiper-container {
        width: 100%;
        height: 200px;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;;
            }
        }
    }
    button{
        width: 40%;
        height: 50px;
        border: none;
        outline: none;
        border-radius: 10px;
        margin: 20px 5%;
    }
}
    
</style>