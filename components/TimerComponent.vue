<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();

const seconds = ref(quizStore.timerSeconds);

const animationDuration = computed(() => `${quizStore.timerSeconds}s`);

const setCountDown = () => {
  if (seconds.value > 0) {
    setTimeout(() => {
      seconds.value = seconds.value - 1;
    }, 1000);
  } else {
    quizStore.markQuestionAsWrong();
  }
};

onMounted(setCountDown);

watch(seconds, setCountDown);
</script>

<template>
  <div class="timer-container">
    <p>
      Counter Time : <span>{{ seconds }} S</span>
    </p>
    <div class="timer-body-container">
      <div class="timer-body" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.timer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    text-align: center;
    padding-bottom: 0.5rem;
  }
}

.timer-body-container {
  height: 1rem;
  width: 50%;
  border-radius: $rounded-full;
  background-color: #ccc;
  overflow: hidden;
}

.timer-body {
  height: 100%;
  border-radius: $rounded-full;
  background-color: green;
  animation: timer-animation v-bind(animationDuration) linear 1 forwards;
}

@media (min-width: $desktop-breakpoint) {
  .timer-body-container {
    width: calc(100% / 3);
  }
}

@keyframes timer-animation {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>
stores/quiz
