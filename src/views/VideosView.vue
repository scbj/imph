<template>
  <transition
    name="fade"
    appear
    mode="out-in"
  >
    <div class="videos-view">
      <router-link :to="{ name: 'home' }" class="logo">
        <BaseLogo size="small" />
      </router-link>
      <VideoList :videos="category.videos" />
      <h2 class="title">
        {{ category.label }}
      </h2>
      <HomeFooter />
    </div>
  </transition>
</template>

<script>
import HomeFooter from '@/components/HomeFooter.vue'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'VideosView',

  components: {
    HomeFooter,
    VideoList
  },

  computed: {
    videos () {
      return this.category && this.category.videos
    },
    category () {
      return this.findActiveCategory({
        categories: this.$store.get('categories'),
        categoryName: this.$route.params.category
      })
    }
  },

  created () {
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
.videos-view {
  display: grid;
  grid-template-columns: 20% 1fr auto;
  grid-template-rows: auto auto;
  align-items: flex-start;
  // height: 100vh;
  position: relative;

  > * {
    z-index: 10;
  }
}

.logo,
.title {
  margin: 3rem;
  position: sticky;
  top: 3rem;
}

.title {
  grid-area: 1 / 3 / 2 / 4;
}

.video-list {
  grid-column: 2 / 4
}

.home-footer {
  grid-column: 1 / -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
