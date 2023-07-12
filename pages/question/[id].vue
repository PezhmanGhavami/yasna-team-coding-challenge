<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();

const route = useRoute();

if (!quizStore.hasStarted) {
  navigateTo("/");
}

useHead({
  title: `Question ${route.params.id}`,
});
</script>

<template>
  <Question />
  <TimerComponent />
  <AnswersContainer />
  <ProgressBulletsContainer />
</template>
