<script>
// const imageUrl = new URL('https://via.placeholder.com/200');
// const title = "";
export default {
  props: {
    title: {
      type: String,
      default: 'this is a product'
    },
    images: {
      type: String,
      default: 'https://via.placeholder.com/200'
    },
    price: {
      type: String,
      default: 'product description'
    },
    key: {
      type: String,
    }
  },
  methods: {
    getImage(pic) {
      return new URL(pic);
    }
  }

}
</script>

<template>
  <article class="h-fit w-full bg-white shadow rounded-md cursor-pointer" :key="key">
    <img :src="getImage(images)" class="rounded-t-md w-full" alt="">
    <div class="px-4 py-2">
      <h3>{{ title }}</h3>
      <div class="flex justify-between items-center pb-1">
        <p>{{ price }}</p>
        <a class="px-4 py-1 rounded-md text-white hover:bg-green-700 bg-green-600 cursor-pointer" href="#">Buy</a>
      </div>
    </div>
  </article>
</template>