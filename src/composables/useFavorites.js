import { ref, watch } from 'vue'

const STORAGE_KEY = 'santos-populares-favorites'

export function useFavorites() {
  const favorites = ref([])
  
  // Load from localStorage on init
  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        favorites.value = JSON.parse(stored)
      }
    } catch (err) {
      console.error('Error loading favorites:', err)
      favorites.value = []
    }
  }
  
  // Save to localStorage when changes
  const saveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
    } catch (err) {
      console.error('Error saving favorites:', err)
    }
  }
  
  const toggleFavorite = (eventId) => {
    const index = favorites.value.indexOf(eventId)
    if (index === -1) {
      favorites.value.push(eventId)
    } else {
      favorites.value.splice(index, 1)
    }
  }
  
  const isFavorite = (eventId) => {
    return favorites.value.includes(eventId)
  }
  
  const clearFavorites = () => {
    favorites.value = []
  }
  
  // Watch for changes and persist
  watch(favorites, saveToStorage, { deep: true })
  
  // Initialize
  loadFromStorage()
  
  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites
  }
}