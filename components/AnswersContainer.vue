<script setup lang="ts">
import { useQuizStore } from "@/stores/quiz";

const quizStore = useQuizStore();

const { answerQuestion } = quizStore;
</script>

<template>
  <div scoped class="answer-container">
    <Answer
      v-for="answer in quizStore.currentQuestion.answers"
      :text="answer.text"
      :key="answer"
      @click="() => answerQuestion(answer.is_correct)"
    />
  </div>
</template>

<style lang="scss">
.answer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
}
</style>
stores/quiz
