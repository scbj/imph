<template>
  <div class="social-links">
    <div
      v-for="link in links"
      :key="link.label"
      class="link"
    >
      <img :src="require(`@/assets/images/icon-${link.iconName}.svg`)">
      <a :href="link.url" :target="link.openTab === false ? null : '_blank'">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const mail = 'imphfilm@gmail.com'
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
  display: flex;
  justify-content: space-around;
}

.link {
  margin-left: 3.4em;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:first-of-type {
    margin-left: 0;
  }

  img {
    $size: 1.5rem;
    margin-right: .5em;
    width: $size;
    height: $size;
  }
}
</style>
