<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <span class="logo-icon">🎉</span>
        <h1 class="logo-text">Santos Populares</h1>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const temaAtual = ref('folk')

onMounted(() => {
  const temaGuardado = localStorage.getItem('tema') || 'folk'
  temaAtual.value = temaGuardado
  document.documentElement.setAttribute('data-tema', temaGuardado)
})
</script>

<style scoped>
.header {
  background-color: var(--cor-fundo-card);
  box-shadow: 0 2px 8px var(--cor-sombra);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color var(--transicao-media);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamento-sm) var(--espacamento-md);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--espacamento-xs);
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  font-size: 1.5rem;
  color: var(--cor-primaria);
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--espacamento-lg);
}

.nav-link {
  color: var(--cor-texto);
  font-weight: 500;
  padding: var(--espacamento-xs) var(--espacamento-sm);
  border-radius: var(--raio-md);
  transition: all var(--transicao-rapida);
}

.nav-link:hover {
  background-color: var(--cor-borda);
  color: var(--cor-primaria);
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: var(--espacamento-xs);
  padding: var(--espacamento-xs) var(--espacamento-md);
  background-color: var(--cor-terciaria);
  color: var(--cor-texto);
  border-radius: var(--raio-xl);
  font-weight: 600;
  transition: all var(--transicao-rapida);
}

.theme-toggle:hover {
  transform: scale(1.05);
  box-shadow: var(--brilho, 0 2px 8px var(--cor-sombra));
}

.theme-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: var(--espacamento-sm);
  }
  
  .nav {
    gap: var(--espacamento-sm);
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>