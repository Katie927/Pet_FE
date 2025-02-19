
<template>
  <header :class="{ hidden: isHidden }">
    <HeaderComponent @update-isHidden="updateIsHidden"/>
  </header>
  <main>
    <component :is="currentView" />
    <!-- <Home /> -->
  </main>

</template>


<script setup>

  import Home from './views/HomeView.vue';
  import HeaderComponent from './components/Header.vue';
  import Login from './views/Login.vue';

  import { ref,computed } from 'vue';

  const isHidden = ref(false);
  const updateIsHidden = (value) => {
    isHidden.value = value;
  }

  // routes
  const routes = {
    '/': Home,
    '/login': Login
  }
  const currentPath = ref(window.location.hash || '#/')
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash || '#/';
  })
  const currentView = computed(() => {
    return routes[currentPath.value.replace(/^#/, '') || Home]
  })

</script>
