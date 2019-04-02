<template>
  <li class="card-item" :style="backgroundImage">
    <slot>
      <!-- Default content -->
      <span class="title">{{ title | lowerCase }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </slot>
  </li>
</template>

<script>
import backgroundImage from '@/mixins/backgroundImage'
import { lowerCase } from '@/filters/string'

export default {
  filters: { lowerCase },

  mixins: [ backgroundImage ],

  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_fonts.scss';

.card-item {
  background-repeat: no-repeat;
  background-position: -45px;
  background-size: auto 100%;
  border-radius: 8px;
  padding: 14px;
  margin: 60px 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 320px;
  // box-shadow: 0 10px 20px rgba(#000000, 66%);
  filter: drop-shadow(0 10px 20px rgba(#000000, 66%));
}

.title {
  font-size: 1.88rem;
  line-height: 1.9rem;
  letter-spacing: .1em;
}

.subtitle {
  // @extend %secondary-font;
  font-size: 13px;
}
</style>
