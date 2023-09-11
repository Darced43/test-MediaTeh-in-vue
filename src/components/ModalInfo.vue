<template>
    <Transition name="modal">
      <div v-if="showModalInfo" class="modal-mask">
        <div class="modal-container">
  
          <div class="modal-body">
            <slot name="body">Данные отправлены</slot>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  const props = defineProps({
    showModalInfo: Boolean
  })
  </script>
  
  <style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }
  
  .modal-container {
    height: 80%;
    width: 80%;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    background-color: black;
    position: relative;
  }
  
  .modal-default-button {
    float: right;
  }
  
  .modal-enter-from {
    opacity: 0;
  }
  
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  
  
  .modal-body {
    color: white;
    font-size: 8rem;
    position: absolute;
    left: 30%;
    top: 40%;
  }

  @media(max-width:2500px){
    .modal-body{
      font-size: 7rem;
    }
  }
  @media(max-width:2200px){
    .modal-body{
      left: 25%;
    }
  }
  @media(max-width:1920px){
    .modal-body{
      left: 25%;
      font-size: 6rem;
    }
  }
  @media(max-width:1650px){
    .modal-body{
      left: 20%;
      font-size: 6rem;
    }
  }
  @media(max-width:1400px){
    .modal-body{
      left: 16%;
    }
  }
  
  @media(max-width:1260px){
    .modal-body{
      font-size: 5rem;
    }
  }
  
  @media(max-width:1024px){
    .modal-body{
      font-size: 4rem;
      left: 20%;
    }
  }
  @media(max-width:900px){
    .modal-body{
      font-size: 3rem;
      left: 19%;
    }
  }
  @media(max-width:650px){
    .modal-body{
      left: 13%;
    }
  }
  @media(max-width:550px){
    .modal-body{
      font-size: 2rem;
      left: 15%;
    }
  }
  @media(max-width:380px){
    .modal-body{
      left: 12%;
    }
  }
  @media(max-width:340px){
    .modal-body{
      left: 9%;
    }
  }
  
  </style>