<template>
  <div class="card-list">
    <ul>
      <CardItem
        v-for="(category, index) in categories"
        :key="index"
        :title="category.label"
        :subtitle="category.videos.length + ' vidéos'"
        :background-source="category.thumbnailUrl"
      />
      <CardItem
        title="contacts"
        subtitle="y"
        background-source=" "
      >
        Yo
      </CardItem>
    </ul>
    <div class="stepper">
      <div
        v-for="n in itemCount"
        :key="n"
        :class="{ active: n === itemVisibleIndex + 1 }"
        class="step"
        @click="changeVisible(n)"
      />
    </div>
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import CardItem from '@/components/CardItem.vue'

export default {
  components: {
    CardItem
  },

  data () {
    return {
      itemVisibleIndex: 0
    }
  },

  computed: {
    categories: get('categories'),

    activeCategory: sync('home/activeCategory'),

    itemCount () {
      return this.categories.length + 1
    }
  },

  mounted () {
    this.activeCategory = this.categories[0]
  },

  methods: {
    changeVisible (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
  }
}

.card-item {
  flex: 0 0 auto;
  margin-right: 18px;
  margin-right: 1.19rem;

  &:first-of-type {
    margin-left: 110px;
  }
}

.stepper {
  margin: 32px auto 38px auto;
  text-align: center;
}

.step {
  background: rgba(#ffffff, 40%);
  border-radius: 2px;
  margin-right: 10px;
  display: inline-block;
  width: 16px;
  height: 2px;
  transition: width .2s ease-in-out;

  &.active {
    background: #ffffff;
    width: 22px;
  }
}
</style>
