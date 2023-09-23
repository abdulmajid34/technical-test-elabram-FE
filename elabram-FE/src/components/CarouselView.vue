<script setup>
import imageUrl_1 from '@/assets/Illustration-1.svg'
import imageUrl_2 from '@/assets/Illustration-2.svg'
import imageUrl_3 from '@/assets/Illustration-3.svg' 

const slides = [
    imageUrl_1,
    imageUrl_2,
    imageUrl_3
]
</script>

<template>
  <v-carousel cycle height="707" :show-arrows="false" hide-delimiter-background contain transition="fade-transition"
    reverse-transition="fade-transition">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%" class="sheet-carousel" tile>
        <div class="d-flex flex-column">
          <div class="title-1">
            <span>A few clicks away from being a part of Axdif</span>
          </div>
          <div class="d-flex fill-height justify-center align-center py-3">
            <v-img width="300" height="300" aspect-ratio="16/9" contain :src="slide" alt="images">

            </v-img>
          </div>
          <div class="text-center pt-8">
            <span class="title-2">Manage Task Easily & Efficiently</span>
            <p class="paragraf-sheet">
              Increase employee productivity and performance in a measurable and precision system in one application.
            </p>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
    .paragraf-sheet {
        font-size: 20px;
        color: #FFFFFF;
        font-weight: 300;
        line-height: 24px;
        padding-top: 16px;
    }
    .title-2 {
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 0.21px;
    }
    .sheet-carousel {
        background-image: url('../assets/Masking-1.svg');
        background-size: cover;
        background-color: #0796E5;        
    }
    .title-1 {        
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-top: 50px;                
        letter-spacing: 0.33px;
        color: #FFFFFF;
        opacity: 1;
        line-height: 53px;
    }
</style>