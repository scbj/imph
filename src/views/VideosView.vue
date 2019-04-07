<template>
  <div class="videos-view">
    Some code here
  </div>
</template>

<script>
export default {
  name: 'VideosView',

  data () {
    return {
      category: null
    }
  },

  mounted () {
    // Find active category and store it as data
    this.category = this.findActiveCategory({
      categories: this.$store.get('categories'),
      categoryName: this.$route.params.category
    })
  },

  methods: {
    findActiveCategory ({ categories, categoryName }) {
      if (!categories) {
        return console.log("Category list isn't valid")
      } else if (!categories.length) {
        return console.log('Category list is empty')
      }

      return categories.find(c => c.name === categoryName) ||
        console.log(`Category '${categoryName}' doesn't exist`, categories)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
