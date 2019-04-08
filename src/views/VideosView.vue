<template>
  <transition
    name="fade"
    appear
    mode="out-in"
  >
    <div :class="'theme-' + category.theme" class="videos-view">
      <router-link :to="{ name: 'home' }" class="logo">
        <BaseLogo size="small" />
      </router-link>
      <ul class="videos">
        <li
          v-for="video in category.videos"
          :key="video.name"
          class="video"
        >
          <img :src="video.thumbnailUrl" class="thumbnail">
        </li>
      </ul>
      <h2 class="title">
        {{ category.label }}
      </h2>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VideosView',

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
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  height: 100vh;
  overflow-y: auto;
}

.logo,
.title {
  margin: 3rem;
}

.videos {
  flex-grow: 1;
  list-style: none;
}

.video {
  margin: 2rem;
}

.thumbnail {
  border-radius: 7px;
  width: 20rem;
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
