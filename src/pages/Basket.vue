<template class="basket__error">
    <div class="main">
      <div class="wrapper">
        <main  
          v-if="prodEnterBasket.length > 0"
        >
          <BasketProd/>
          <button class="product__btn" @click="byAllProd">купить</button>
          <Teleport to="body">
            <ModalBasket :showModal="showModal" @close="showModal = false"/>
          </Teleport>
        </main>
        <main v-else>
          <h3 class="text__info">Выберите товар</h3>
        </main>
      </div>
    </div>
</template>

<script setup>
  import { inject, ref } from 'vue';
  import BasketProd from '../components/BasketProd.vue';
  import ModalBasket from '../components/ModalBasket.vue';

  const prodEnterBasket = inject('prodEnterBasket')

  const showModal = ref(false)

  function byAllProd(){
    showModal.value = true
  }
</script>

<style>
  .text__info{
    text-align: center;
    color: #051D36;
    font-family: 'Inter';
    font-size: 70px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
  }
</style>