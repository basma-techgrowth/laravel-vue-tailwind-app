<script setup>
import PageComponent from '../components/PageComponent.vue';
</script>

<template>
  <PageComponent title="dashboard">
    <div class="flex flex-col gap-4">
       <section class="h-72 w-full flex items-center justify-center bg-white shadow px-4 py-4">
      <h1>Dashboard content here</h1>
    </section>
    <section class="flex w-full gap-4 md:flex-row flex-col">
      <article class="h-60 md:w-1/2 bg-white shadow flex items-center justify-center">
        <h1>stat one</h1>
      </article>
      <article class="h-60 md:w-1/2 bg-white shadow flex items-center justify-center">
        <h1>stat two</h1>
      </article>
    </section>
    </div>
  </PageComponent>
</template>


