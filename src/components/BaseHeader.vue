<template>
  <div class="header">
    <div v-if="hasLeftIconSlot" class="header__left-icon">
      <slot name="leftIcon" />
    </div>
    <div class="header__title">
      <slot />
    </div>
    <div v-if="hasRightIconSlot" class="header__right-icon">
      <slot name="rightIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  computed: {
    hasLeftIconSlot() {
      return this.$slots.leftIcon;
    },
    hasRightIconSlot() {
      return this.$slots.rightIcon;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 16px;
  color: #111111;
  &__title {
    font-size: 18px;
    font-weight: 700;
  }
  &__right-icon {
    margin-left: auto;
  }
  &__left-icon {
    margin-right: 16px;
  }
}
</style>
