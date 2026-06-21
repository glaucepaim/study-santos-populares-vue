import { ref, computed } from 'vue'
import { fetchEvents, filterEvents, sortEvents } from '../services/eventsService'

export function useEvents() {
  const events = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  const filters = ref({
    city: 'All',
    type: 'All',
    search: '',
    startDate: '',
    endDate: ''
  })
  
  const sortBy = ref('date')
  
  const loadEvents = async () => {
    loading.value = true
    error.value = null
    
    try {
      const data = await fetchEvents()
      events.value = data
    } catch (err) {
      error.value = 'Could not load events. Please try again later.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  
  const filteredEvents = computed(() => {
    const filtered = filterEvents(events.value, filters.value)
    return sortEvents(filtered, sortBy.value)
  })
  
  const cities = computed(() => {
    const uniqueCities = [...new Set(events.value.map(e => e.city))]
    return ['All', ...uniqueCities.sort()]
  })
  
  const types = computed(() => {
    const uniqueTypes = [...new Set(events.value.map(e => e.type))]
    return ['All', ...uniqueTypes.sort()]
  })
  
  const clearFilters = () => {
    filters.value = {
      city: 'All',
      type: 'All',
      search: '',
      startDate: '',
      endDate: ''
    }
  }
  
  return {
    events,
    filteredEvents,
    loading,
    error,
    filters,
    sortBy,
    cities,
    types,
    loadEvents,
    clearFilters
  }
}