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
    console.log(prodEnterBasket)
  }

</script>

<style>

</style>