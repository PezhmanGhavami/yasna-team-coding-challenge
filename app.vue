<template>
  <div class="container">
    <button class="button">Start</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background-color: #f0f8ff;
}

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
