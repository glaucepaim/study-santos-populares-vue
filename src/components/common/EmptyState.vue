<template>
  <div class="empty-state">
    <div class="empty-icon">{{ icon }}</div>
    <h3 class="empty-title">{{ title }}</h3>
    <p class="empty-message">{{ message }}</p>
    <button v-if="actionText" @click="$emit('action')" class="btn-action">
      {{ actionText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '🎉'
  },
  title: {
    type: String,
    default: 'Nenhum resultado encontrado'
  },
  message: {
    type: String,
    default: 'Tente ajustar seus filtros para encontrar o que você está procurando.'
  },
  actionText: {
    type: String,
    default: ''
  }
})

defineEmits(['action'])
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: var(--spacing-xl);
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
}

.empty-title {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.empty-message {
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.btn-action {
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-action:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}
</style>