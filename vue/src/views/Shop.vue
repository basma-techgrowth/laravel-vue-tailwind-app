<script setup>
import PageComponent from '../components/PageComponent.vue';
import data from "../data/data.json"
import Product from "../components/Product.vue"
</script>

<template>
  <PageComponent title="shop">
    <div class="flex flex-col gap-4">
      <div class="h-20 w-full bg-white shadow flex items-center justify-center font-bold">
        <h1>Random Stuff For Sale</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 col-span-full  gap-4 items-center justify-center">
        <div v-for="item in data" class="w-full">
        <Product :title="item.name" :images="item.image" :price="item.price" :key="item.id"/>
      </div>
      </div>
      
    </div>
  </PageComponent>
</template>

