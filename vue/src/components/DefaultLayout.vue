<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon,XMarkIcon, HomeIcon,Bars3BottomLeftIcon, Bars3BottomRightIcon, UserGroupIcon} from '@heroicons/vue/24/outline'
import  {useStore} from 'vuex'
import {computed} from  'vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false);

const navigation = [
  { name: 'Dashboard', to: {name:'Dashboard'}, icon: HomeIcon },
  { name: 'Shop', to: {name:'Shop'}, icon: UserGroupIcon } 
]
const store = useStore();
const user = computed(()=> store.state.user.data);
const router = useRouter()

function logout(){
  store.commit('logout');
  router.push({
    name:'Login'
  })
}
</script>


<template>
  <section class="flex">
    <!-- sidenav -->
    <div :class="[isOpen?'w-72':'md:w-16','duration-500 bg-green-700 min-h-screen px-2']">
      <!-- menu bar icon -->
      <div  :class="[isOpen?'justify-end':'justify-center','py-3 flex  text-white']">
        <component :is="isOpen? XMarkIcon : Bars3Icon " class="block h-8 w-8 cursor-pointer" 
        @click="isOpen = !isOpen" />
      </div>
      <!-- menu items desktop -->
     <div class="mt-4 flex flex-col gap-4 relative">
      <a @click="logout" class="block px-3 py-2 text-sm font-medium text-white cursor-pointer hover:bg-green-800 bg-green-600 rounded-md whitespace-pre" v-if="isOpen">Sign out</a>
      <router-link v-for="item in navigation" :key="item.name" :to="item.to" :class="[this.$route.name === item.to.name ? 'bg-green-800 text-white' : 'text-white hover:bg-green-800', 'rounded-md text-sm font-medium flex items-center gap-3.5', isOpen? 'px-3 py-2 p-2':'p-1 justify-center']">
        <component :is="item.icon" :class="[isOpen?'h-6 w-6':'h-7 w-7 ','cursor-pointer']"/>
          <h2 :class="[!isOpen &&'opacity-0 translate-x-28 overflow-hidden','whitespace-pre duration-500']" v-if="isOpen">{{ item.name }}</h2>    
      </router-link>
     </div>

    </div>
    <!-- content -->
    <div class="w-full">
      <router-view></router-view>
    </div>

  </section>
</template>

