<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, HomeIcon, Bars3BottomLeftIcon, Bars3BottomRightIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false);

const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' }, icon: HomeIcon },
  { name: 'Shop', to: { name: 'Shop' }, icon: UserGroupIcon }
]
// const ls = $store.getters.getUser();
const store = useStore();
const user = computed(() => store.state.user.data);
const router = useRouter()

function logout() {
  store.commit('logout');
  router.push({
    name: 'Login'
  })
 
}
</script>


<template>
  <section class="flex md:flex-row flex-col">
    <!-- sidenav desktop start -->
    <div :class="[isOpen ? 'w-72' : 'md:w-16', 'duration-500 bg-green-700 min-h-screen px-2 md:block hidden']">
      <!-- menu bar icon -->
      <div :class="[isOpen ? 'justify-end' : 'justify-center', 'py-3 flex  text-white']">
        <component :is="isOpen ? XMarkIcon : Bars3Icon" class="block h-8 w-8 cursor-pointer"
          @click="isOpen = !isOpen" />
      </div>
      <!-- menu items desktop -->
      <nav class="mt-4 flex flex-col gap-4 relative">
          <div @click="logout"
          class="flex gap-2 px-3 items-center py-2  bg-green-900 rounded-md"
          v-if="isOpen">
          <img :src="user.imageUrl" class="h-10 w-10 rounded-full" alt="">
          <div class="flex flex-col justify-start text-sm font-medium text-white w-full ">
            <a @click="logout" class="cursor-pointer py-1 px-1 hover:bg-green-600 rounded-md w-fit ">Sign out </a>
            <!-- <span class="block text-red-500 text-sm py-1 px-1">{{ user.email }}</span> -->
          </div>
        </div>
        <router-link v-for="item in navigation" :key="item.name" :to="item.to"
          :class="[this.$route.name === item.to.name ? 'bg-green-600 text-white' : 'text-white hover:bg-green-600', 'rounded-md text-sm font-medium flex items-center gap-3.5', isOpen ? 'px-3 py-2 p-2' : 'p-1 justify-center']">
          <component :is="item.icon" :class="[isOpen ? 'h-6 w-6' : 'h-7 w-7 ', 'cursor-pointer']" />
          <span :class="[!isOpen && 'opacity-0 translate-x-28 overflow-hidden', 'whitespace-pre-wrap duration-500']"
            v-if="isOpen">{{ item.name }}</span>
        </router-link>
      </nav>
    </div>
    <!-- sidenav desktop end -->
    <!-- sidenav mobile begining -->
    <div class="bg-green-700 h-16 w-full md:hidden px-4 relative duration-500">
      <!-- menu bar icon -->
      <button :class="[isOpen ? 'hidden' : 'justify-start', 'flex mt-4 text-white duration-500']">
        <component :is="isOpen ? XMarkIcon : Bars3Icon" class="block h-8 w-8 cursor-pointer"
          @click="isOpen = !isOpen" />
      </button>
      <!-- overlay -->
      <div :class="[isOpen?'absolute top-0 left-0 w-full bg-black opacity-50 min-h-screen':'hidden','duration-500']"></div>
      <!-- modal menu -->
      <div :class="[isOpen?'w-72':'w-0 overflow-hidden','absolute top-0 left-0 bg-green-700 min-h-screen duration-500']">
        <!-- menu items desktop -->
        <div class="w-full mt-4 pr-4 flex justify-end text-white">
          <button>
            <component :is="isOpen ? XMarkIcon : Bars3Icon" class="block h-8 w-8 cursor-pointer"
          @click="isOpen = !isOpen" />
          </button>
        </div>
      <nav class="mt-8 flex flex-col gap-2 relative px-4 duration-500">
        <div @click="logout"
          class="flex gap-4 px-3 items-center py-2  bg-green-900 rounded-md whitespace-pre"
          v-if="isOpen">
          <img :src="user.imageUrl" class="h-10 w-10 rounded-full" alt="">
          <div class="flex flex-col justify-start text-sm font-medium text-white w-full ">
            <a @click="logout" class="cursor-pointer py-1 px-1 hover:bg-green-600 rounded-md w-fit ">Sign out </a>
            <!-- <span class="block py-1 px-1">{{ user.email }}</span> -->
          </div>
        </div>
        <router-link v-for="item in navigation" :key="item.name" :to="item.to"
          :class="[this.$route.name === item.to.name ? 'bg-green-600 text-white' : 'text-white hover:bg-green-600', 'rounded-md text-sm font-medium flex items-center gap-3.5', isOpen ? 'px-3 py-2 p-2' : 'p-1 justify-center']">
          <component :is="item.icon" :class="[isOpen ? 'h-6 w-6' : 'h-7 w-7 ', 'cursor-pointer']" />
          <h2 :class="[!isOpen && 'opacity-0 translate-x-28 overflow-hidden', 'whitespace-pre duration-500']"
            v-if="isOpen">{{ item.name }}</h2>
        </router-link>
      </nav>
      </div>
    </div>
    <!-- content -->
    <div class="w-full">
      <router-view></router-view>
    </div>

  </section>
</template>

