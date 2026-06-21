<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h2 class="hero-title">
          <span class="highlight">Santos Populares 2026</span>
        </h2>
        <p class="hero-subtitle">
          Descobre os melhores arraiais, marchas e festas populares em Lisboa, Porto e Braga
        </p>
      </div>
      
      <div class="hero-countdown">
        <CountdownBanner :targetDate="proximaFesta" />
      </div>
    </div>
    
    <div class="hero-pattern"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CountdownBanner from './CountdownBanner.vue'

// Próxima festa: São João (24 de Junho)
const proximaFesta = ref(new Date('2026-06-24T00:00:00'))
</script>

<style scoped>
.hero {
  position: relative;
  padding: var(--spacing-lg) 0;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
  max-width: 1142px;
  padding: var(--spacing-lg) 0;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.highlight {
  display: inline-block;
  color: var(--color-text);
  padding: var(--spacing-lg) var(--spacing-md);
  transform: rotate(-2deg);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-fast);
  display: inline-block;
}

.btn-primary {
  background-color: var(--color-tertiary);
  color: var(--color-text);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.btn-secondary {
  background-color: white;
  color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-background);
}

.hero-countdown {
  display: flex;
  justify-content: center;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-cta {
    justify-content: center;
  }
}
</style>