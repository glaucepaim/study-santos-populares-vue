<template>
  <div class="home-page">
    <HeroSection />
    
    <section class="main-content">
      <div class="container">
        <EventFilters
          :filters="state.filters"
          :sortBy="state.sortBy"
          :cities="state.cities"
          :types="state.types"
          @update:search="updateFilter('search', $event)"
          @update:city="updateFilter('city', $event)"
          @update:type="updateFilter('type', $event)"
          @update:sortBy="state.sortBy = $event"
          @update:startDate="updateFilter('startDate', $event)"
          @update:endDate="updateFilter('endDate', $event)"
          @clear="state.clearFilters()"
        />
        
        <EventGrid
          :events="state.filteredEvents"
          :loading="state.loading"
          :error="state.error"
          :favorites="favoritesState.favorites"
          @retry="state.loadEvents()"
          @clear-filters="state.clearFilters()"
          @toggle-favorite="favoritesState.toggleFavorite($event)"
          @view-details="viewDetails"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '../components/home/HeroSection.vue'
import EventFilters from '../components/events/EventFilters.vue'
import EventGrid from '../components/events/EventGrid.vue'
import { useEvents } from '../composables/useEvents'
import { useFavorites } from '../composables/useFavorites'

const router = useRouter()

// Manter o objeto completo para preservar reatividade
const state = reactive(useEvents())
const favoritesState = reactive(useFavorites())

const updateFilter = (key, value) => {
  state.filters[key] = value
}

const viewDetails = (event) => {
  router.push({ name: 'EventDetails', params: { id: event.id } })
}

onMounted(() => {
  state.loadEvents()
})
</script>

<style scoped>
.main-content {
  padding: var(--spacing-xl) 0;
}
</style>