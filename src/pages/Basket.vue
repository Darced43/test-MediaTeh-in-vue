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
          <Teleport to="body">
            <ModalInfo :showModalInfo="showModalInfo" @close="showModalInfo = false"/>
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
  import { useRouter, useRoute } from 'vue-router'
  import BasketProd from '../components/BasketProd.vue';
  import ModalBasket from '../components/ModalBasket.vue';
  import ModalInfo from '../components/ModalInfo.vue';

  const prodEnterBasket = inject('prodEnterBasket')

  const showModal = ref(false)
  const showModalInfo = ref(false)

  function rotationModal(){
    showModalInfo.value = true
    showModal.value = false
  }

  function reloadPage(){
    location.reload(),
    router.push({path:'/'})
  }

  const router = useRouter()

  function byAllProd(){
    showModal.value = true
    setTimeout( () => rotationModal(), 3000)
    setTimeout( () => router.push({path:'/'}), 5000)
    setTimeout( () => location.reload(), 5001)
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
  @media(max-width:800px){
    .text__info{
      font-size: 50px;
    }
  }
</style>