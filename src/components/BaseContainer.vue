<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  padding: 0 16px;
}
</style>
