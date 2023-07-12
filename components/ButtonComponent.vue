<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 0.75rem 1.5rem;
  background-color: #0095ff;
  color: white;
  border: none;
  border-radius: $rounded;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  &:focus {
    filter: brightness(0.9);
  }
}
</style>
