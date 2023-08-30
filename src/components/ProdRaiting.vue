<script setup>

    const props = defineProps({
        prod: String
    })

</script>

<template>
          <div>
            <div v-if="prod.rating <= 1">
              <img src="../img/star.svg" alt="звезда">
            </div>
            <div v-if="prod.rating <= 2">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
            </div>
            <div v-if="prod.rating <= 3">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
            </div>
            <div v-if="prod.rating <= 4">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
            </div>
            <div v-if="prod.rating > 4">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
              <img src="../img/star.svg" alt="звезда">
            </div>
            <span class="stock">{{ prod.stock }}</span>
          </div>
</template>


<style scoped>
  .stock{ 
    color: #999;
    /* font-family: 'Inter'; */
    font-family: 'Open Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
</style>