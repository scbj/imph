<template>
  <StaggeredList :opacity="() => lte('small') ? 1 : 0.7" class="category-list">
    <CategoryItem
      v-for="(category, index) in categories"
      :key="index"
      :data-index="index"
      :category="category"
      @mouseover.native="mouseoverItem($event, category)"
      @mouseleave.native="mouseLeaveItem"
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
    activeCategory: sync('home/activeCategory')
  },

  methods: {
    mouseoverItem (event, category) {
      if (this.gte('medium')) {
        event.target.style.opacity = 1
        this.changeBackgroundVideo(category)
      }
    },

    mouseLeaveItem (event) {
      if (this.gte('medium')) {
        event.target.style.opacity = 0.7
      }
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
