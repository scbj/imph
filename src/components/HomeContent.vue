<template>
  <!-- Permet de gérer la différence de template entre les versions dekstop et mobile. -->
  <div class="home-content">
    <!-- Mobile version -->
    <template v-if="['extraSmall', 'small'].includes($mq)">
      <h1>imph</h1>
      <h2>Réalisateur numérique</h2>
      <div class="empty" />
      <CardList />
    </template>

    <!-- Desktop version -->
    <template v-else>
      <div class="category-buttons">
        <CategoryButton
          v-for="category in categories"
          :key="category.label"
          :link="'/' + category.path"
          :label="category.label"
          @over="changeBackgroundVideo(category)"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import CardList from '@/components/CardList.vue'
import CategoryButton from '@/components/CategoryButton.vue'

export default {
  components: {
    CardList,
    CategoryButton
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
.home-content {
  display: flex;
  flex-direction: column;
}

%text {
  margin-left: 32px;
  margin-right: 32px;
  text-shadow: 0 3px 6px rgba(#000000, 68%);
}

h1 {
  @extend %text;
  font-family: Teko;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: .03em;
}

h2 {
  @extend %text;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 400;
}

.empty {
  flex-grow: 1;
}

.card-list {
  justify-self: flex-end;
}

.category-buttons {
  margin: auto 10%;
  display: flex;
  flex-direction: row;
}
</style>
