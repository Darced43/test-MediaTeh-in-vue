<script setup>
  import {  toRefs, ref, inject } from 'vue';

  import ProdRaiting from './ProdRaiting.vue';
  import createPrice from '../hooks/createPrice'

  const props = defineProps({
    prod: String
  })

  const emit = defineEmits(['addCount'])

  const {prod} = toRefs(props)

  const prodEnter  = {
    name: prod.value.title,
    price: prod.value.price,
    img: prod.value.thumbnail,
    id: prod.value.id
  }

  function getTotalPrice(){
    const totalPrice = Math.floor((prod.value.price /( 100 - prod.value.discountPercentage)) * prod.value.discountPercentage + prod.value.price)
    return totalPrice
  }
  getTotalPrice()

  const discountActive = prod.value.price > 0
  const isActive = ref('discount')


</script>

<template>
      <div class="product">
        <div class="product__block">
          <img :src=prod.thumbnail  alt="изображение товара" class="product__block__image">
        </div>
        <div class="product__info">
          <ProdRaiting class="product__info__rating" :prod="prod"/>
          <h6 class="product__info__description">{{ prod.description }}</h6>
        </div>
        <div  class="product__price">
          <div class="product__price__block">
            <span class="product__price__first">{{  getTotalPrice() }}</span>
            <span class="product__price__discount">-{{ Math.floor(prod.discountPercentage) }}%</span>
          </div>
          <div
            class="prduct__price__total"
            :class="[discountActive  ? isActive : '' ]"
            >{{ createPrice(prod.price) }} ₽
          </div>
        </div>
        <div class="block__product__btn">
          <button 
            class="product__btn"
            @click="$emit('addCount', prod.price, prodEnter)"
          >в корзину
          </button>
        </div>
      </div>
</template>

<style scoped>

.product{
  display: flex;
  flex-direction: column;
  padding: 15px 15px 24px 15px;
  gap: 16px;
  text-align: center;
}
.product__block{
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product__block__image{
  width: 141px;
  height: auto;
  max-height: 145px;
}

.product__info__rating{
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}

.product__info__description{
    width: 174px;
    margin-bottom: 16px;
    font-family: "Open Sans";
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin: 0 auto 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.product__price{
  display: flex;
  gap: 4px;
  flex-direction: column;
}
.product__price__block{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
}
.product__price__first{
  margin-right: 8px;
  font-family: "Inter";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: line-through 1.5px #F44336;
    margin-right: 8px;
    color: #808080;
}
.product__price__discount{
  padding: 4px 6px;
    border-radius: 4px;
    background: #F44336;
    color: white;
    font-size: 11px;
    font-family: "Inter";
    font-weight: 700;
    line-height: 12px;
    text-transform: uppercase;
}
.prduct__price__total{
color: #333;
font-family: 'Inter';
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 32px; /* 123.077% */
}

.prduct__price__total.discount{
  color: #F44336;
}

@media(max-width:660px){
  .product{
    padding:10px;
    gap:5px;
  }
}
@media(max-width:470px){
  .product{
    flex-direction: row;
    padding: 5px;
  }
  .product__block{
    height: auto;
  }
  .product__price{
    justify-content: center;
  }
.product__block__image{
    width: 120px;
}
.product__info__description{
  font-size: 12px;
  line-height: 18px;
  width: 143px;
}
.product__price__first{
  font-size: 12px;
  margin-right: 4px;
}
.product__price__discount{
  padding: 3px 4px;
}
.prduct__price__total.discount{
  font-size: 18px;
}
.block__product__btn{
  display: flex;
}
}

</style>