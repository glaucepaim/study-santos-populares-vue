<template>
  <section id="events" class="event-grid-section">
    <div class="container">
      <h2 class="section-title">Eventos disponíveis</h2>
      
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading events...</p>
      </div>
      
      <div v-else-if="error" class="error-state">
        <p>❌ {{ error }}</p>
        <button @click="$emit('retry')" class="btn-retry">Tente novamente</button>
      </div>
      
      <div v-else-if="events.length === 0" class="empty-state">
        <p>🎉 Nenhum evento encontrado com os filtros atuais.</p>
        <button @click="$emit('clear-filters')" class="btn-clear">Limpar filtros</button>
      </div>
      
      <div v-else class="event-grid">
        <EventCard 
          v-for="event in events" 
          :key="event.id"
          :event="event"
          :isFavorite="favorites.includes(event.id)"
          @toggle-favorite="$emit('toggle-favorite', $event)"
          @view-details="$emit('view-details', $event)"
        />
      </div>
      
      <div v-if="!loading && events.length > 0" class="event-count">
        <p>{{ events.length }} event{{ events.length !== 1 ? 's' : '' }} found</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCard from './EventCard.vue'

defineProps({
  events: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  },
  favorites: {
    type: Array,
    default: () => []
  }
})

defineEmits(['retry', 'clear-filters', 'toggle-favorite', 'view-details'])
</script>

<style scoped>
.event-grid-section {
  padding: var(--spacing-xl) 0;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text);
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--color-text-light);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto var(--spacing-md);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-retry,
.btn-clear {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-retry:hover,
.btn-clear:hover {
  background-color: var(--color-secondary);
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.event-count {
  text-align: center;
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 2px solid var(--color-border);
  color: var(--color-text-light);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .event-grid {
    grid-template-columns: 1fr;
  }
}
</style>