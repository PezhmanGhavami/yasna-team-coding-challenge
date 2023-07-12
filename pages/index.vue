<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <div class="container">
    <ButtonComponent
      @click="quizStore.startTheQuiz"
      title="Click to start the quiz"
    >
      Start
    </ButtonComponent>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
