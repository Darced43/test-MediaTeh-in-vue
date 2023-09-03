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
    font-size: 5rem;
    position: absolute;
    left: 30%;
    top: 40%;
    // position: relative;
    // width: 400px;
    // margin: 0 auto;
    // height: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // text-align: center;
  }
  
  </style>