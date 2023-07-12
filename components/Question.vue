<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <div class="question-container">
    <p>{{ quizStore.currentQuestion.question_text }}</p>
  </div>
</template>

<style scoped lang="scss">
.question-container {
  width: 100%;
  padding: 1rem;

  p {
    background-color: #95c4ee;
    padding: 0.75rem 0;
    border-radius: $rounded-md;
    text-align: center;
  }
}
</style>
