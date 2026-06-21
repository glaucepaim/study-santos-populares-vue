<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
      
      <section class="main-content">
        <div class="container">
          <EventFilters
            :filtros="filtros"
            :ordenacao="ordenacao"
            :cidades="cidades"
            :tipos="tipos"
            @update:filtros="filtros = $event"
            @update:ordenacao="ordenacao = $event"
            @limpar="limparFiltros"
          />
          
          <EventGrid
            :eventos="eventosFiltrados"
            :loading="loading"
            :error="error"
            :favoritos="favoritos"
            @retry="carregarEventos"
            @clear-filters="limparFiltros"
            @toggle-favorite="toggleFavorito"
            @view-details="verDetalhes"
          />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/home/HeroSection.vue'
import EventFilters from './components/events/EventFilters.vue'
import EventGrid from './components/events/EventGrid.vue'
import { useEvents } from './composables/useEvents'
import { useFavorites } from './composables/useFavorites'

const {
  eventosFiltrados,
  loading,
  error,
  filtros,
  ordenacao,
  cidades,
  tipos,
  carregarEventos,
  limparFiltros
} = useEvents()

const { favoritos, toggleFavorito } = useFavorites()

const verDetalhes = (evento) => {
  console.log('Ver detalhes:', evento)
  // Futuro: navegar para página de detalhes
}

onMounted(() => {
  carregarEventos()
})
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

.main-content {
  padding: var(--espacamento-xl) 0;
}
</style>