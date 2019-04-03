<template>
  <div class="social-links">
    <a
      v-for="link in links"
      :key="link.label"
      class="link"
      :href="link.url"
      :target="anchorTarget(link.newTab)"
    >
      <img :src="require(`@/assets/images/icon-${link.iconName}.svg`)" class="icon">
      <span v-show="gte('medium')" class="text">
        {{ link.label }}
      </span>
    </a>
  </div>
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [ responsive ],

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
          newTab: false
        }
      ]
    }
  },

  methods: {
    anchorTarget (newTab) {
      return newTab === false ? undefined : '_blank'
    }
  }
}
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: space-around;
  user-select: none;
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
