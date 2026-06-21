<template>
  <div class="event-details-page">
    <div class="container">
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading event details...</p>
      </div>
      
      <div v-else-if="error" class="error-state">
        <p>❌ {{ error }}</p>
        <router-link to="/" class="btn-back">← Voltar para Eventos</router-link>
      </div>
      
      <div v-else-if="event" class="event-details">
        <button @click="goBack" class="btn-back">
          ← Voltar para Eventos
        </button>
        
        <div class="details-grid">
          <div class="details-image">
            <img :src="event.image" :alt="event.name" />
            <span class="event-type-badge" :class="event.type">
              {{ formatType(event.type) }}
            </span>
            <span class="featured-badge" v-if="event.featured">⭐ Featured</span>
          </div>
          
          <div class="details-content">
            <h1 class="event-title">{{ event.name }}</h1>
            
            <div class="event-meta-large">
              <div class="meta-item">
                <span class="meta-icon">📍</span>
                <div>
                  <strong>{{ event.city }}</strong>
                  <p>{{ event.location }}</p>
                </div>
              </div>
              
              <div class="meta-item">
                <span class="meta-icon">📅</span>
                <div>
                  <strong>{{ formatDate(event.date) }}</strong>
                  <p>{{ event.time }}</p>
                </div>
              </div>
              
              <div class="meta-item">
                <span class="meta-icon">💰</span>
                <div>
                  <strong>{{ event.price }}</strong>
                </div>
              </div>
            </div>
            
            <div class="event-description-full">
              <h2>Sobre este evento</h2>
              <p>{{ event.description }}</p>
            </div>
            
            <div class="event-actions">
              <button 
                @click="toggleFavorite(event.id)"
                class="btn-favorite"
                :class="{ active: isFavorite(event.id) }"
              >
                {{ isFavorite(event.id) ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos' }}
              </button>
              
              <a 
                :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location + ', ' + event.city)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-map"
              >
                🗺️ Ver no mapa
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <h2>Evento não encontrado</h2>
        <p>O evento que você está procurando não existe ou foi removido.</p>
        <router-link to="/" class="btn-back">← Voltar para Eventos</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchEvents } from '../services/eventsService'
import { useFavorites } from '../composables/useFavorites'

const route = useRoute()
const router = useRouter()
const { toggleFavorite, isFavorite } = useFavorites()

const event = ref(null)
const loading = ref(true)
const error = ref(null)

const loadEvent = async () => {
  loading.value = true
  error.value = null
  
  try {
    const events = await fetchEvents()
    const eventId = parseInt(route.params.id)
    event.value = events.find(e => e.id === eventId) || null
  } catch (err) {
    error.value = 'Não foi possível carregar os detalhes do evento. Tente novamente mais tarde.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.push('/')
}

const formatDate = (dateISO) => {
  const date = new Date(dateISO)
  return date.toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

const formatType = (type) => {
  const types = {
    marcha: 'Marcha',
    arraial: 'Arraial',
    concerto: 'Concerto',
    sardinhada: 'Sardinhada',
    feira: 'Feira',
    tradicional: 'Traditional'
  }
  return types[type] || type
}

onMounted(() => {
  loadEvent()
})

watch(() => route.params.id, () => {
  loadEvent()
})
</script>

<style scoped>
.event-details-page {
  padding: var(--spacing-xl) 0;
  min-height: 80vh;
}

.loading-state,
.error-state,
.not-found {
  text-align: center;
  padding: var(--spacing-xl);
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

.btn-back {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-background-card);
  color: var(--color-text);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
  text-decoration: none;
  margin-bottom: var(--spacing-lg);
}

.btn-back:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  background-color: var(--color-background-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 24px var(--color-shadow);
}

.details-image {
  position: relative;
  height: 100%;
  min-height: 400px;
}

.details-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-type-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
}

.event-type-badge.marcha { background-color: var(--type-marcha); }
.event-type-badge.arraial { background-color: var(--type-arraial); }
.event-type-badge.concerto { background-color: var(--type-concerto); }
.event-type-badge.sardinhada { background-color: var(--type-sardinhada); }
.event-type-badge.feira { background-color: var(--type-feira); }
.event-type-badge.tradicional { background-color: var(--type-tradicional); }

.featured-badge {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  background-color: var(--color-tertiary);
  color: var(--color-text);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
}

.details-content {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.event-title {
  font-size: 2.5rem;
  color: var(--color-text);
  line-height: 1.2;
}

.event-meta-large {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  border-radius: var(--radius-md);
}

.meta-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.meta-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.meta-item strong {
  display: block;
  font-size: 1.125rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.meta-item p {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin: 0;
}

.event-description-full h2 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.event-description-full p {
  color: var(--color-text-light);
  line-height: 1.8;
  font-size: 1rem;
}

.event-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-favorite,
.btn-map {
  flex: 1;
  min-width: 200px;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-fast);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.btn-favorite {
  background-color: var(--color-background);
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.btn-favorite:hover {
  background-color: var(--color-tertiary);
  border-color: var(--color-tertiary);
}

.btn-favorite.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.btn-map {
  background-color: var(--color-primary);
  color: white;
}

.btn-map:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .details-image {
    min-height: 300px;
  }
  
  .event-title {
    font-size: 2rem;
  }
  
  .event-actions {
    flex-direction: column;
  }
  
  .btn-favorite,
  .btn-map {
    width: 100%;
  }
}
</style>