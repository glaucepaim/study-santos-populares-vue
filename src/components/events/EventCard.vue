<template>
  <article class="event-card" :class="{ featured: event.featured }">
    <div class="event-image">
      <img :src="event.image" :alt="event.name" loading="lazy" />
      <span class="event-badge" v-if="event.featured">⭐ Featured</span>
      <span class="event-type-badge" :class="event.type">
        {{ formatType(event.type) }}
      </span>
    </div>
    
    <div class="event-content">
      <div class="event-header">
        <h3 class="event-title">{{ event.name }}</h3>
        <button 
          class="favorite-btn"
          :class="{ active: isFavorite }"
          @click.stop="$emit('toggle-favorite', event.id)"
          :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
        >
          {{ isFavorite ? '❤️' : '🤍' }}
        </button>
      </div>
      
      <p class="event-description">{{ event.description }}</p>
      
      <div class="event-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          <span>{{ event.city }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">📅</span>
          <span>{{ formatDate(event.date) }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🕐</span>
          <span>{{ event.time }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">💰</span>
          <span>{{ event.price }}</span>
        </div>
      </div>
      
      <button class="btn-details" @click="$emit('view-details', event)">
        View Details
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-favorite', 'view-details'])

const formatDate = (dateISO) => {
  const date = new Date(dateISO)
  return date.toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
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
</script>

<style scoped>
.event-card {
  background-color: var(--color-background-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-shadow);
  transition: all var(--transition-medium);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px var(--color-shadow);
}

.event-card.featured {
  border: 3px solid var(--color-tertiary);
}

.event-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);
}

.event-card:hover .event-image img {
  transform: scale(1.1);
}

.event-badge {
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background-color: var(--color-tertiary);
  color: var(--color-text);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
}

.event-type-badge {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
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

.event-content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex-grow: 1;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-sm);
}

.event-title {
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 0;
  flex-grow: 1;
}

.favorite-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform var(--transition-fast);
  padding: 0;
}

.favorite-btn:hover {
  transform: scale(1.2);
}

.event-description {
  color: var(--color-text-light);
  line-height: 1.5;
  font-size: 0.9rem;
  flex-grow: 1;
}

.event-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xs);
  margin: var(--spacing-sm) 0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.meta-icon {
  font-size: 1rem;
}

.btn-details {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
}

.btn-details:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .event-meta {
    grid-template-columns: 1fr;
  }
}
</style>