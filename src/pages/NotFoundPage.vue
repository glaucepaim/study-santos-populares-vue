<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Página não encontrada</h2>
        <p class="error-message">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <router-link to="/" class="btn-home">
          ← De volta para casa
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-md);
  text-shadow: 4px 4px 0 var(--color-tertiary);
}

.error-title {
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.error-message {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.btn-home {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--color-primary);
  color: white;
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.btn-home:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-shadow);
}
</style>