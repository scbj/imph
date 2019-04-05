<template>
  <ul class="category-list">
    <CategoryItem
      v-for="category in categories"
      :key="category.path"
      :category="category"
      @mouseover.native="changeBackgroundVideo(category)"
      @click.native="$router.push(category.path)"
    />
  </ul>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import CategoryItem from '@/components/CategoryItem.vue'

export default {
  components: {
    CategoryItem
  },

  computed: {
    categories: get('categories'),
    activeCategory: sync('home/activeCategory')
  },

  methods: {
    changeBackgroundVideo (category) {
      if (this.activeCategory !== category) {
        this.activeCategory = category
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.category-item {
  flex: 1;
}
</style>
