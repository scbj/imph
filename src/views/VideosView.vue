<template>
  <transition
    name="fade"
    appear
    mode="out-in"
  >
    <div class="videos-view">
      <template v-if="videos">
        Some code here
      </template>
      <template v-else>
        No videos now...
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VideosView',

  data () {
    return {
      category: null
    }
  },

  computed: {
    videos () {
      return this.category && this.category.videos
    }
  },

  mounted () {
    // Find active category and store it as data
    this.category = this.findActiveCategory({
      categories: this.$store.get('categories'),
      categoryName: this.$route.params.category
    })

    if (!this.category) {
      this.$router.push({ name: 'home' })
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
