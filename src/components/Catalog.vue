<script setup>
import { onMounted, ref } from 'vue';
import ProductItem from './ProductItem.vue';
import getProductList from '../services/index.js';
import Search from './Search.vue';

const productInCartList = ref([]);
const productList = ref([]);
const filteredProductList = ref([]);

onMounted(async () => {
  productList.value = await getProductList();
  filteredProductList.value = productList.value;
});

const search = (filterPrice, filterProduct) => {
  if (filterPrice && filterProduct) {
    filteredProductList.value = filteredProductList.value.filter(product => product.title.toLowerCase().includes(filterProduct) && +product.price === +filterPrice)
    return
  }
  if (filterPrice) {
    filteredProductList.value= filteredProductList.value.filter(product => +product.price === +filterPrice);
    return;
  }
  if (filterProduct) {
    filteredProductList.value = filteredProductList.value.filter(product => product.title.toLowerCase().includes(filterProduct))
    return;
  }
  filteredProductList.value = productList.value;
}
const addProduct = (product) => {
  productInCartList.value.push(product);
}
</script>

<template>
  <div style="display: flex;align-items: center;justify-content: space-between;    font-size: 30px;margin: 0 20px;    cursor: pointer;">
    <Search @search="search"/>
    <router-link :to="{ path: `/cart` }" >
      <div style="text-decoration: underline;">
        Cart
      </div>
    </router-link>
  </div>
  <div class="wrapper_products">
    <ProductItem v-for="product in filteredProductList" :key="product.id" :product="product" @addProduct="addProduct"/>
  </div>
</template>

<style scoped>
.wrapper_products {
  display: flex;
  flex-wrap: wrap;
}
.product-price-btn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
}
.product-price-btn button {
  display: inline-block;
  height: 50px;
  width: 176px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}

input[type="text"]{
  margin: 0 10px;
  width:250px;
  height:50px;
  padding-left:15px;
  border-radius:6px;
  border:none;
  color:#939393;
  font-weight:500;
  background-color:#fffbf8;
  -webkit-box-shadow:
      0 -2px 2px 0 rgba(199, 199, 199, 0.55),
      0 1px 1px 0 #fff,
      0 2px 2px 1px #fafafa,
      0 2px 4px 0 #b2b2b2 inset,
      0 -1px 1px 0 #f2f2f2 inset,
      0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
  -moz-box-shadow:
      0 -2px 2px 0 rgba(199, 199, 199, 0.55),
      0 1px 1px 0 #fff,
      0 2px 2px 1px #fafafa,
      0 2px 4px 0 #b2b2b2 inset,
      0 -1px 1px 0 #f2f2f2 inset,
      0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
  box-shadow:
      0 -2px 2px 0 rgba(199, 199, 199, 0.55),
      0 1px 1px 0 #fff,
      0 2px 2px 1px #fafafa,
      0 2px 4px 0 #b2b2b2 inset,
      0 -1px 1px 0 #f2f2f2 inset,
      0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
}
input[type="search"]:focus{
  outline:0;
}
</style>
