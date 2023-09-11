<template>
    <div class="main">
    <div class="wrapper">
      <main>
        <h1 class="main__title">Новинки</h1>
        <div class="main__products">
          <CartProd 
            v-for="prod in products" 
            :prod="prod"
            :key="prod.id"
            @addCount="getPurchases"
          />
        </div>
      </main>
    </div>
    </div>
</template>

<script setup>
  import {  ref, inject } from "vue"
  import axios from "axios";
  import  CartProd  from '../components/СartProd.vue'
        
  const products = ref(null)
  const countBtn = inject('countBtn')
  const priceHead = inject('priceHead')
  const URL = 'https://dummyjson.com/products?limit=12'
  const prodEnterBasket = inject('prodEnterBasket')


  async function getProducts() {
      try {
          const response = await axios.get(URL);
          console.log(response.data.products)
          products.value =  response.data.products
      } catch (error) {
          console.log(error);
      }
  }
  getProducts()
  
  function getPurchases(a, b){
    ++countBtn.value
    priceHead.value += a
    prodEnterBasket.push(b)
  }

</script>

<style >
.main__products{
  display: grid;
  grid-template-columns: repeat(6, 1fr) ;
}

@media(max-width: 1300px){
  .main__products{
    grid-template-columns: repeat(5, 1fr) ;
  }
}

@media(max-width: 1200px){
  .main__products{
    grid-template-columns: repeat(4, 1fr) ;
  }
}

@media(max-width: 920px){
  .main__products{
    grid-template-columns: repeat(3, 1fr) ;
  }
}
@media(max-width:620px){
  .main__products{
    grid-template-columns: repeat(2, 1fr) ;
  }
}
@media(max-width:470px){
  .main__products{
    grid-template-columns: repeat(1, 1fr) ;
  }
  .product__price{
    min-width: 67px;
    grid-column: 2/3;
  }
  .product__info__description{
    width: 100px;
  }
  .product__info__rating{
    display: none!important;
  }
  .product{
    display: grid !important;
  }
  .product__block{
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .product__info{
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .block__product__btn{
    grid-column: 2/3;
    justify-content: center;
  }
}
</style>