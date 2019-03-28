<template>
  <div class="social-links">
    <template v-for="link in links">
      <img
        :key="link.name"
        :src="require(`@/assets/images/icon-${link.iconName}.svg`)"
        width="28"
        height="28"
      >
      <span :key="link.name">
        {{ link.label }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          iconName: 'facebook',
          label: '/imphfilm'
        },
        {
          iconName: 'instagram',
          label: '@imphfilm'
        },
        {
          iconName: 'mail',
          label: 'johanboisson@hotmail.fr'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

img {
  margin-left: 3.4em;
  margin-right: .5em;
  transform: translateY(20%);

  &:first-of-type {
    margin-left: 0;
  }
}

span {
    font-family: 'Teko';
    font-size: 1.6rem;
    letter-spacing: .05em;
    position: relative;

    &::after {
      content: '';
      background: white;
      width: 40%;
      height: 2px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) scale(0);
      transition: transform .2s ease-out;
    }

    &:hover::after {
      transform: translateX(-50%) scale(1);
    }
}
</style>
