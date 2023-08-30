<template>
  <div class="header" :class="{active: isActive}">
          <router-link 
            to="/" 
            v-if="route.path == '/basket'" 
            class="header__toMain" 
            @click="() => {isActive = false}"
          >
            <div>На главную</div>
          </router-link>
        <router-link 
          to="/basket" 
          @click="() => {isActive = true}"
          class="header__basket"
        >
          <div class="btnPay">
            <img src="../img/Buy.svg"/>
            <span class="btnPay__tital__price">{{ createPrice(priceHead) }} ₽</span>
            <span class="btnPay__total__product">{{ countBtn }}</span>
          </div>
        </router-link>
      </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import {useRoute} from 'vue-router'

import createPrice from '../hooks/createPrice'

  const countBtn = inject('countBtn')
  const priceHead = inject('priceHead')

  const route = useRoute()
  const isActive = ref(false)
</script>

<style scoped>
  .header{
    padding: 10px;
    display: flex;
    justify-content: end;
  }
  .header.active{
    justify-content: space-between;
  }

  .header__toMain{
    text-decoration: none;
    color: #051D36;
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
  }
  .btnPay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    border-radius: 12px;
    background: #F5F7FA;
  }
  .btnPay__tital__price{
    color: #051D36;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .btnPay__total__product{
    width: 16px;
    display: flex;
    padding: 6px 4px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #F44336;
    color: #FFF;
    text-align: center;
    font-variant-numeric: lining-nums tabular-nums;
    font-family: 'Inter';
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px; /* 109.091% */
  }
  .header__basket{
    text-decoration: none;
  }
</style>