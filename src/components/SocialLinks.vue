<template>
  <div class="social-links">
    <template v-for="link in links">
      <img
        :key="link.name"
        :src="require(`@/assets/images/icon-${link.iconName}.svg`)"
        width="20"
        height="20"
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
          label: 'Facebook'
        },
        {
          iconName: 'instagram',
          label: 'Instagram'
        },
        {
          iconName: 'mail',
          label: 'Envoyer un mail'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  transform: translateY(.25em);
}
</style>
