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
</style>