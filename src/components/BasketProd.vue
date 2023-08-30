<template>
    <div 
        class="basket"
        v-for="prodEnter in prodEnterBasket"
        :key="prodEnter.id"
    >
    <div class="basket__prod__info">
        <img :src=prodEnter.img alt="продукт" class="basket__prod__img">
        <h5 class="basket__name">{{ prodEnter.name }}</h5>
    </div>
    <div class="basket__price">
        <span>{{ prodEnter.price }}</span>
    </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const prodEnterBasket = inject('prodEnterBasket')
</script>

<style scoped>
.basket{
    border: 1px solid teal;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .basket__name{
    color: #051D36;
    font-family: 'Inter';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    margin: 0;
  }
  .basket__prod__info{
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .basket__price{
    display: flex;
    align-items: center;
  }
  .basket__price span{
    color: #333;
    font-family: 'Inter';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
  .basket__prod__img{
    width: 11rem;
    height: auto;
  }
</style>