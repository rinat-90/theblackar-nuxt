<template>
  <v-layout row wrap>
    <swiper :options="swiperOption" class="py-3 mb-3" v-match-heights="v_match">
      <slide v-for="feed in feedbacks" :key="feed.id" :feed="feed"></slide>
      <div slot="button-prev" class="slider-action arrow-btn-left">
        <v-btn icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </div>
      <div slot="button-next" class="slider-action arrow-btn-right">
        <v-btn icon>
          <v-icon>arrow_forward</v-icon>
        </v-btn>
      </div>
      <v-pagination class="swiper-pagination" slot="pagination"></v-pagination>
    </swiper>
  </v-layout>
</template>

<script>
  import Slide from "./Slide";
  export default {
    name: 'carousel',
    props: ['feedbacks'],
    components: { Slide },
    data() {
      return {
        v_match:{
          el:['#fbText'],
          disabled: [ // Array of heights where the plugin will not set the heights
            767, // If a string is provided this will be used as a max bound
            [920, 1200], // If an array is provided it will be used as min-max bounds in that order
          ]
        },
        swiperOption: {
          roundLengths: true,
          slidesPerView: 2,
          spaceBetween: 10,
          // init: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.arrow-btn-right',
            prevEl: '.arrow-btn-left'
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 15
            }
          }
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  @import "../../node_modules/swiper/dist/css/swiper.css";
  .slider-action {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    opacity:.5;
  }
  .arrow-btn-left{
    left:-5px;
  }
  .arrow-btn-right{
    right: -5px;
  }
  .swiper-wrapper{
    margin-bottom: 20px;
  }
  .swiper-container-horizontal  .swiper-pagination-bullets{
    bottom: 0;
    left: 50%;
    width:auto;
    transform: translateX(-50%);
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    display: inline-block;
    width: 30px;
    margin: 0;
    margin-left: 10px;
    border-radius: 0;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet:first-child{
    margin-left:0;
  }
  .swiper-pagination-bullet .swiper-pagination-bullet-active{
    background-color: rgba(0,0,0,0.8);
  }
  .swiper-pagination{
    padding:15px auto;
  }
</style>
