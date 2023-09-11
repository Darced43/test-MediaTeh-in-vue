<template>
  <Transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-container">

        <div class="modal-body" data-text="Получаем доступ к устройству">
          <slot name="body">Получаем доступ к устройству</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
    showModal: Boolean
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
}

@keyframes noise-anim {
  0% {
    clip: rect(55px, 9999px, 65px, 0);
  }
  5% {
    clip: rect(90px, 9999px, 38px, 0);
  }
  10% {
    clip: rect(61px, 9999px, 50px, 0);
  }
  15% {
    clip: rect(96px, 9999px, 16px, 0);
  }
  20% {
    clip: rect(71px, 9999px, 91px, 0);
  }
  25% {
    clip: rect(34px, 9999px, 65px, 0);
  }
  30% {
    clip: rect(97px, 9999px, 59px, 0);
  }
  35% {
    clip: rect(63px, 9999px, 54px, 0);
  }
  40% {
    clip: rect(51px, 9999px, 43px, 0);
  }
  45% {
    clip: rect(33px, 9999px, 23px, 0);
  }
  50% {
    clip: rect(86px, 9999px, 7px, 0);
  }
  55% {
    clip: rect(10px, 9999px, 97px, 0);
  }
  60% {
    clip: rect(83px, 9999px, 100px, 0);
  }
  65% {
    clip: rect(80px, 9999px, 14px, 0);
  }
  70% {
    clip: rect(87px, 9999px, 35px, 0);
  }
  75% {
    clip: rect(53px, 9999px, 71px, 0);
  }
  80% {
    clip: rect(41px, 9999px, 12px, 0);
  }
  85% {
    clip: rect(11px, 9999px, 17px, 0);
  }
  90% {
    clip: rect(50px, 9999px, 46px, 0);
  }
  95% {
    clip: rect(28px, 9999px, 16px, 0);
  }
  100% {
    clip: rect(57px, 9999px, 17px, 0);
  }
}
.modal-body:after {
  content: attr(data-text);
  position: absolute;
  left: 1%;
  text-shadow: -1px 0 red;
  top: 1%;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(66px, 9999px, 64px, 0);
  }
  5% {
    clip: rect(89px, 9999px, 62px, 0);
  }
  10% {
    clip: rect(37px, 9999px, 59px, 0);
  }
  15% {
    clip: rect(43px, 9999px, 39px, 0);
  }
  20% {
    clip: rect(70px, 9999px, 76px, 0);
  }
  25% {
    clip: rect(10px, 9999px, 30px, 0);
  }
  30% {
    clip: rect(21px, 9999px, 74px, 0);
  }
  35% {
    clip: rect(35px, 9999px, 69px, 0);
  }
  40% {
    clip: rect(56px, 9999px, 8px, 0);
  }
  45% {
    clip: rect(89px, 9999px, 85px, 0);
  }
  50% {
    clip: rect(85px, 9999px, 19px, 0);
  }
  55% {
    clip: rect(22px, 9999px, 84px, 0);
  }
  60% {
    clip: rect(20px, 9999px, 20px, 0);
  }
  65% {
    clip: rect(80px, 9999px, 17px, 0);
  }
  70% {
    clip: rect(98px, 9999px, 90px, 0);
  }
  75% {
    clip: rect(24px, 9999px, 4px, 0);
  }
  80% {
    clip: rect(74px, 9999px, 93px, 0);
  }
  85% {
    clip: rect(93px, 9999px, 30px, 0);
  }
  90% {
    clip: rect(73px, 9999px, 15px, 0);
  }
  95% {
    clip: rect(45px, 9999px, 69px, 0);
  }
  100% {
    clip: rect(9px, 9999px, 69px, 0);
  }
}
.modal-body:before {
  content: attr(data-text);
  position: absolute;
  left: 1%;
  text-shadow: 1px 0 blue;
  top: 1%;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

@media(max-width: 3000px){
  .modal-body{
    left: 22%;
  }
}

@media(max-width: 2200px){
  .modal-body{
    left: 20%;
  }
}

@media(max-width: 1920px){
  .modal-body{
    left: 24%;
    font-size: 4rem;
  }
}

@media(max-width: 1700px){
  .modal-body{
    left: 20%;
    font-size: 4rem;
  }
}

@media(max-width: 1400px){
  .modal-body{
    left: 12%;
    font-size: 4rem;
  }
}

@media(max-width: 1200px){
  .modal-body{
    left: 12%;
    font-size: 3rem;
  }
  .modal-body:after {
    font-size: 47px;
  }
  .modal-body::before{
    font-size:47px;
  }
}
@media(max-width: 900px){
  .modal-body{
    left:9%;
  }
}
@media(max-width: 820px){
  .modal-body{
    font-size: 2rem;
    left:20%;
  }
  .modal-body:after {
    font-size: 31px;
  }
  .modal-body::before{
    font-size:31px;
  }
}
@media(max-width: 650px){
  .modal-body{
    left: 11%;
  }
}
@media(max-width: 550px){
  .modal-body{
    left: 6%;
  }
}
@media(max-width: 500px){
  .modal-body{
    text-align: center;
  }
  .modal-body:after {
    text-align: center;
  }
  .modal-body::before{
    text-align: center;
  }
}
</style>