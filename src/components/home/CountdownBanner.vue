<template>
  <div class="countdown">
    <h3 class="countdown-title">Falta pouco para o São João!</h3>
    <div class="countdown-grid">
      <div class="countdown-item" v-for="(value, key) in tempoRestante" :key="key">
        <span class="countdown-value">{{ value }}</span>
        <span class="countdown-label">{{ label(key) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: Date,
    required: true
  }
})

const tempoRestante = ref({
  dias: 0,
  horas: 0,
  minutos: 0,
  segundos: 0
})

let intervalo = null

const calcularCountdown = () => {
  const agora = new Date()
  const diferenca = props.targetDate - agora
  
  if (diferenca > 0) {
    tempoRestante.value = {
      dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diferenca % (1000 * 60)) / 1000)
    }
  }
}

const label = (chave) => {
  const labels = {
    dias: 'Dias',
    horas: 'Horas',
    minutos: 'Minutos',
    segundos: 'Segundos'
  }
  return labels[chave]
}

onMounted(() => {
  calcularCountdown()
  intervalo = setInterval(calcularCountdown, 1000)
})

onUnmounted(() => {
  if (intervalo) clearInterval(intervalo)
})
</script>

<style scoped>
.countdown {
  background-color: var(--cor-fundo-card);
  padding: var(--espacamento-lg);
  border-radius: var(--raio-xl);
  box-shadow: 0 8px 24px var(--cor-sombra);
  text-align: center;
}

.countdown-title {
  color: var(--cor-primaria);
  font-size: 1.5rem;
  margin-bottom: var(--espacamento-md);
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--espacamento-sm);
}

.countdown-item {
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-secundaria));
  padding: var(--espacamento-md);
  border-radius: var(--raio-lg);
  color: white;
}

.countdown-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: var(--espacamento-xs);
}

.countdown-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .countdown-value {
    font-size: 1.5rem;
  }
}
</style>