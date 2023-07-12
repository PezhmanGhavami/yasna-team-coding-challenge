<script setup lang="ts">
interface IProgressBulletProps {
  answerIsCorrect: boolean | null;
}
const props = defineProps<IProgressBulletProps>();
</script>

<template>
  <div
    :title="
      answerIsCorrect === null
        ? 'Not answered yet'
        : answerIsCorrect
        ? 'Correct'
        : 'Wrong'
    "
    class="bullet"
    :class="answerIsCorrect !== null && (answerIsCorrect ? 'green' : 'red')"
  />
</template>

<style scoped lang="scss">
.bullet {
  border: 1px solid black;
  border-radius: $rounded-full;
  height: 1.75rem;
  width: 1.75rem;
  margin-right: 0.5rem;

  &:last-child {
    margin-right: 0;
  }

  &.green {
    background-color: green;
  }

  &.red {
    background-color: red;
  }
}
</style>
