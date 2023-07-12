import { defineStore } from "pinia";

import { shuffledQuizData } from "@/utils/shuffleQuizData";

type Progress = boolean | null;

export const useQuizStore = defineStore("quiz", () => {
  const quizData = ref(shuffledQuizData());
  const hasStarted = ref(false);
  const isFinished = ref(false);
  const index = ref(0);
  const answerProgress = ref(Array<Progress>(quizData.value.length).fill(null));

  const timerSeconds = 10;

  const currentQuestion = computed(() => quizData.value[index.value]);

  const quizResult = computed(
    () =>
      (answerProgress.value.reduce(
        (acc, answer) => (answer ? acc + 1 : acc),
        0
      ) *
        100) /
      answerProgress.value.length
  );

  function reset() {
    const newQuizData = shuffledQuizData();
    quizData.value = newQuizData;
    hasStarted.value = false;
    isFinished.value = false;
    index.value = 0;
    answerProgress.value = Array<Progress>(newQuizData.length).fill(null);
  }

  function handleIndexUpdateAndNavigation() {
    if (index.value === quizData.value.length - 1) {
      hasStarted.value = false;
      isFinished.value = true;
      return navigateTo("/result");
    }
    index.value++;
    navigateTo(`/question/${index.value + 1}`);
  }

  function answerQuestion(answerIsCorrect: boolean) {
    answerProgress.value[index.value] = answerIsCorrect;
    handleIndexUpdateAndNavigation();
  }

  function markQuestionAsWrong() {
    answerProgress.value[index.value] = false;
    handleIndexUpdateAndNavigation();
  }

  function startTheQuiz() {
    hasStarted.value = true;
    isFinished.value = false;
    navigateTo(`/question/1`);
  }

  function restartTheQuiz() {
    reset();
    startTheQuiz();
  }

  return {
    index,
    quizData,
    hasStarted,
    isFinished,
    quizResult,
    timerSeconds,
    answerProgress,
    currentQuestion,
    startTheQuiz,
    restartTheQuiz,
    answerQuestion,
    markQuestionAsWrong,
  };
});
