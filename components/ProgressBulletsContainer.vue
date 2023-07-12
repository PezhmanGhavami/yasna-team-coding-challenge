<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <div class="bullet-container">
    <ProgressBullet
      v-for="(answerIsCorrect, index) in quizStore.answerProgress"
      :key="index"
      :answerIsCorrect="answerIsCorrect"
    />
  </div>
</template>

<style scoped lang="scss">
.bullet-container {
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
}
</style>
stores/quiz
