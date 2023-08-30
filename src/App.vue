<script setup>
  import  Header  from './components/Header.vue'
</script>

<template> 
    <div class="wrapper">
      <Header/>
    </div>
    <router-view></router-view>
</template>

<style>
body{
  margin: 0;
}


.main{
  background: #F5F7FA;
  height: 100%;
}
.main__products{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.main__title{
  color: #051D36;
  font-family: 'Inter';
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  margin: 0 0 31px 0;
}

main{
  padding: 31px;
}
.basket__error {
  position: relative;
}
.basket__error::before,
.basket__error::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>