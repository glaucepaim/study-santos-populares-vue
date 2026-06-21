<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
      
      <section class="main-content">
        <div class="container">
          <EventFilters
            :filters="filters"
            :sortBy="sortBy"
            :cities="cities"
            :types="types"
            @update:search="filters.search = $event"
            @update:city="filters.city = $event"
            @update:type="filters.type = $event"
            @update:sortBy="sortBy = $event"
            @update:startDate="filters.startDate = $event"
            @update:endDate="filters.endDate = $event"
            @clear="clearFilters"
          />
          
          <EventGrid
            :events="filteredEvents"
            :loading="loading"
            :error="error"
            :favorites="favorites"
            @retry="loadEvents"
            @clear-filters="clearFilters"
            @toggle-favorite="toggleFavorite"
            @view-details="viewDetails"
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
  filteredEvents,
  loading,
  error,
  filters,
  sortBy,
  cities,
  types,
  loadEvents,
  clearFilters
} = useEvents()

const { favorites, toggleFavorite } = useFavorites()

const viewDetails = (event) => {
  console.log('View details:', event)
}

onMounted(() => {
  loadEvents()
})
</script>

<style>
@import './assets/styles/theme.css';
@import './assets/styles/global.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.main-content {
  padding: var(--spacing-xl) 0;
}
</style>