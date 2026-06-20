<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/home/HeroSection.vue'
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/base.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
