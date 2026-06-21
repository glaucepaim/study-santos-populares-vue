<template>
  <div class="filters-container">
    <div class="filters-grid">
      <div class="filter-group">
        <label for="search" class="filter-label">Pesquisar</label>
        <input
          id="search"
          type="text"
          :value="filters.search"
          @input="$emit('update:search', $event.target.value)"
          placeholder="Name, location or description..."
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="city" class="filter-label">Cidade</label>
        <select 
          id="city" 
          :value="filters.city"
          @change="$emit('update:city', $event.target.value)"
          class="filter-select"
        >
          <option v-for="city in cities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="type" class="filter-label">Evento</label>
        <select 
          id="type" 
          :value="filters.type"
          @change="$emit('update:type', $event.target.value)"
          class="filter-select"
        >
          <option v-for="type in types" :key="type" :value="type">
            {{ formatType(type) }}
          </option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="sort" class="filter-label">Ordenar</label>
        <select 
          id="sort" 
          :value="sortBy"
          @change="$emit('update:sortBy', $event.target.value)"
          class="filter-select"
        >
          <option value="date">Data</option>
          <option value="name">Nome</option>
          <option value="city">Cidade</option>
          <option value="price">Preço</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="startDate" class="filter-label">Data de início</label>
        <input
          id="startDate"
          type="date"
          :value="filters.startDate"
          @input="$emit('update:startDate', $event.target.value)"
          class="filter-input"
        />
      </div>
      
      <div class="filter-group">
        <label for="endDate" class="filter-label">Data de término</label>
        <input
          id="endDate"
          type="date"
          :value="filters.endDate"
          @input="$emit('update:endDate', $event.target.value)"
          class="filter-input"
        />
      </div>
    </div>
    
    <div class="filters-actions">
      <button @click="$emit('clear')" class="btn-clear">
        🗑️ Limpar filtros
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filters: {
    type: Object,
    required: true
  },
  sortBy: {
    type: String,
    required: true
  },
  cities: {
    type: Array,
    required: true
  },
  types: {
    type: Array,
    required: true
  }
})

defineEmits([
  'update:search',
  'update:city',
  'update:type',
  'update:sortBy',
  'update:startDate',
  'update:endDate',
  'clear'
])

const formatType = (type) => {
  if (type === 'All') return 'All'
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
.filters-container {
  background-color: var(--color-background-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px var(--color-shadow);
  margin-bottom: var(--spacing-xl);
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.filter-label {
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.875rem;
}

.filter-input,
.filter-select {
  padding: var(--spacing-sm);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.1);
}

.filters-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.btn-clear {
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-tertiary);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-clear:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .filters-grid {
    grid-template-columns: 1fr;
  }
}
</style>