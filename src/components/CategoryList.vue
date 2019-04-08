<template>
  <transition-group
    appear
    name="staggered"
    tag="ul"
    class="category-list"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <CategoryItem
      v-for="(category, index) in categories"
      :key="index"
      :data-index="index"
      :category="category"
      @mouseover.native="mouseoverItem($event, category)"
      @mouseleave.native="mouseLeaveItem"
      @click.native="navigateTo(category)"
    />
  </transition-group>
</template>

<script>
import { get, sync } from 'vuex-pathify'
import Velocity from 'velocity-animate'

import responsive from '@/mixins/responsive'
import CategoryItem from '@/components/CategoryItem.vue'

export default {
  components: {
    CategoryItem
  },

  mixins: [ responsive ],

  computed: {
    categories: get('categories'),
    activeCategory: sync('home/activeCategory')
  },

  methods: {
    mouseoverItem (el, category) {
      if (this.gte('medium')) {
        el.target.style.opacity = 1
        this.changeBackgroundVideo(category)
      }
    },

    mouseLeaveItem (el) {
      if (this.gte('medium')) {
        el.target.style.opacity = 0.7
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
    },

    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(3rem)'
    },

    enter (el, done) {
      const delay = el.dataset.index * 125
      const opacity = this.lte('small') ? 1 : 0.7
      setTimeout(() => {
        Velocity(
          el,
          { opacity, transform: 'translateY(0)' },
          { complete: done }
        )
      }, delay)
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
