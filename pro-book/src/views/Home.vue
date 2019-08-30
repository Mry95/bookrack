<template>
    <div class="wrap">
        <swiper>
            <swiperSlide><img src="../assets/140403143215-0.jpg" alt=""></swiperSlide>
            <swiperSlide><img src="../assets/140405113517-9.jpg" alt=""></swiperSlide>
        </swiper>
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
</style>