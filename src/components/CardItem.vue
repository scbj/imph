<template>
  <li class="card-item" :style="backgroundImage">
    <slot>
      <!-- Default content -->
      <span class="title">{{ title }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    backgroundSource: {
      type: String,
      default: ''
    }
  },

  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.backgroundSource})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  background-image: url('');
  background-repeat: no-repeat;
  background-position: -45px;
  background-size: auto 100%;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
  width: 200px;
  height: 320px;
  box-shadow: 0 10px 20px rgba(#000000, 66%);
}

.title {
  font-family: Teko;
  font-size: 1.88rem;
  line-height: 1.9rem;
  letter-spacing: .02em;
}

.subtitle {
  font-family: 'Roboto Mono';
  font-size: 13px;
}
</style>
