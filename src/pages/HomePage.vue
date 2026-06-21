<template>
  <div class="home-page">
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
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEvents } from '../composables/useEvents'
import { useFavorites } from '../composables/useFavorites'
import HeroSection from '../components/home/HeroSection.vue'
import EventFilters from '../components/events/EventFilters.vue'
import EventGrid from '../components/events/EventGrid.vue'


const router = useRouter()

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
  router.push({ name: 'EventDetails', params: { id: event.id } })
}

onMounted(() => {
  loadEvents()
})
</script>

<style scoped>
    .main-content {
    padding: var(--spacing-xl) 0;
    }
</style>