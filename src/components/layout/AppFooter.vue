<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-info">
        <h3>Santos Populares 2026</h3>
        <p>Celebrando as tradições de Lisboa, Porto e Braga</p>
      </div>
      
      <div class="footer-links">
        <a href="#" class="footer-link">Santo António</a>
        <a href="#" class="footer-link">São João</a>
        <a href="#" class="footer-link">São Pedro</a>
      </div>
      
      <div class="footer-copy">
        <p>&copy; 2026 Santos Populares. Feito com 💚 e 💛</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  border-top: 3px solid var(--cor-primaria);
  margin-top: var(--espacamento-xl);
  padding: var(--spacing-sm) 0;
  transition: background-color var(--transicao-media);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--espacamento-md);
  text-align: center;
}

.footer-info h3 {
  color: var(--color-text-primary);
  margin-bottom: var(--espacamento-xs);
}

.footer-info p {
  color: var(--color-text-primary);
}

.footer-links {
  display: flex;
  gap: var(--espacamento-md);
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: var(--color-text-primary);
  padding: var(--espacamento-xs) var(--espacamento-sm);
  border-radius: var(--raio-md);
  transition: all var(--transicao-rapida);
}

.footer-link:hover {
  background-color: var(--cor-terciaria);
  color: var(--color-text-primary);
}

.footer-copy {
  margin-top: var(--espacamento-sm);
  padding-top: var(--espacamento-sm);
  border-top: 1px solid var(--cor-borda);
  color: var(--color-text-primary);
  font-size: 0.875rem;
}
</style>