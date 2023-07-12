<script setup lang="ts">
interface IAnswerProps {
  text: string;
}
const props = defineProps<IAnswerProps>();
</script>

<template>
  <button class="answer">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9e9ff;
  width: 80%;
  border-radius: $rounded-md;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  &:focus {
    filter: brightness(0.9);
  }
}

@media (min-width: $desktop-breakpoint) {
  .answer {
    width: 50%;
  }
}
</style>
