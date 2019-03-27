<template>
  <button
    class="category-button"
    @mouseover="$emit('over')"
  >
    <router-link class="yo" :to="link">
      {{ label | lowerCase }}
    </router-link>
  </button>
</template>

<script>
import { lowerCase } from '@/filters/string'

export default {
  filters: {
    lowerCase
  },

  props: {
    link: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.category-button {
  background: rgba(#000000, 8%);
  border: none;
  border-radius: 7px;
  outline: none;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;

  a {
    font-family: 'Teko';
    font-size: 42px;
    color: white;
    text-decoration: none;
  }
}
</style>
