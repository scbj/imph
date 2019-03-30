<template>
  <div class="social-links">
    <template v-for="link in links">
      <img
        :key="link.name"
        :src="require(`@/assets/images/icon-${link.iconName}.svg`)"
        width="28"
        height="28"
      >
      <a
        :key="link.name"
        :href="link.url"
        :target="link.openTab === false ? null : '_blank'"
      >
        {{ link.label }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    const mail = 'johanboisson@hotmail.fr'
    return {
      links: [
        {
          iconName: 'facebook',
          label: '/imphfilm',
          url: 'https://www.facebook.com/imphfilm/'
        },
        {
          iconName: 'instagram',
          label: '@imphfilm',
          url: 'https://www.instagram.com/imphfilm/'
        },
        {
          iconName: 'mail',
          label: mail,
          url: `mailto:${mail}`,
          openTab: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.social-links {
  user-select: none;
}

img {
  margin-left: 3.4em;
  margin-right: .5em;
  transform: translateY(20%);

  &:first-of-type {
    margin-left: 0;
  }
}

a {
    font-family: 'Teko';
    font-size: 1.6rem;
    letter-spacing: .05em;
    position: relative;
    cursor: pointer;
}
</style>
