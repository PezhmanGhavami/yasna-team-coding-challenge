<script setup>
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();

if (!quizStore.isFinished) {
  navigateTo("/");
}

useHead({
  title: "Quiz result",
});
</script>

<template>
  <div class="container">
    <p>You have answered {{ quizStore.quizResult }}% of the questions.</p>
    <ButtonComponent
      @click="quizStore.restartTheQuiz"
      title="Click to take the test again"
    >
      Restart
    </ButtonComponent>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding-bottom: 1rem;
  }
}
</style>
