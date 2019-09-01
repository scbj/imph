<template>
  <StaggeredList class="category-list" @mouseleave.native="onMouseLeave">
    <CategoryItem
      v-for="(category, index) in visibleCategories"
      :key="index"
      :data-index="index"
      :category="category"
    />
  </StaggeredList>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import CategoryItem from '@/components/CategoryItem.vue'
import StaggeredList from '@/components/StaggeredList.vue'

export default {
  components: {
    CategoryItem,
    StaggeredList
  },

  computed: {
    categories: get('categories'),
    activeCategory: sync('home/activeCategory'),

    visibleCategories () {
      return this.categories.filter(category => category.visible !== false)
    }
  },

  methods: {
    onMouseLeave () {
      this.$store.set('backgroundMedia/video', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.category-item {
  flex: 1;
}
</style>
