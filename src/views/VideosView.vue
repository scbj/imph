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
      <HomeFooter />
    </div>
  </transition>
</template>

<script>
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  name: 'VideosView',

  components: {
    HomeFooter
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
  overflow: hidden;

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

.videos {
  flex-grow: 1;
  list-style: none;
  margin: 8rem 0;
}

.video {
  margin: 5rem auto;

  > img {
    box-shadow: 10px 15px 30px -4px rgba(#08F4EF, 10%);
  }
}

.thumbnail {
  border-radius: 7px;
  width: 20rem;
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
