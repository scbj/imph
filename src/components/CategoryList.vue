<template>
  <StaggeredList class="category-list" @mouseleave.native="onMouseLeave">
    <CategoryItem
      v-for="(category, index) in visibleCategories"
      :key="index"
      :data-index="index"
      :category="category"
      @mouseover.native="mouseoverItem($event, category)"
      @click.native="navigateTo(category)"
    />
  </StaggeredList>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import responsive from '@/mixins/responsive'
import CategoryItem from '@/components/CategoryItem.vue'
import StaggeredList from '@/components/StaggeredList.vue'

export default {
  components: {
    CategoryItem,
    StaggeredList
  },

  mixins: [ responsive ],

  computed: {
    categories: get('categories'),
    activeCategory: sync('home/activeCategory'),

    visibleCategories () {
      return this.categories.filter(category => category.visible !== false)
    }
  },

  methods: {
    mouseoverItem (event, category) {
      if (this.gte('medium')) {
        this.changeBackgroundVideo(category)
      }
    },

    onMouseLeave () {
      this.changeBackgroundVideo(null)
    },

    changeBackgroundVideo (category) {
      if (this.activeCategory !== category) {
        this.activeCategory = category
      }
    },

    navigateTo (category) {
      this.$router.push({
        name: 'videos',
        params: { category: category.name }
      })
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
