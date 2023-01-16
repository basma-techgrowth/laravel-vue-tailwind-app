


<script>
import PageComponent from './PageComponent.vue';
import Data from "../data/data.json"
import { useRoute } from 'vue-router';
import {ref, watch} from 'vue';
export default{
  components:{
    PageComponent
  },
  methods:{
    getProduct(id){
      return Data.filter((item) => item.id == id)[0].name
    }
  }
}

</script>

<template>
  <PageComponent :title="getProduct($route.params.id)" >
    product detail page {{ $route.params.id }}
  </PageComponent>
</template>