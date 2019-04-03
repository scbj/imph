<template>
  <!-- Permet de gérer la différence de template entre les versions dekstop et mobile. -->
  <div class="home-content">
    <!-- Mobile version -->
    <template v-if="lte('small')">
      <h1>imph</h1>
      <h2>Réalisateur numérique</h2>
      <div class="empty" />
    </template>

    <!-- Desktop version -->
    <template v-else>
      <div class="category-buttons">
        <CategoryButton
          v-for="category in categories"
          :key="category.label"
          :link="'/' + category.path"
          :title="category.label"
          :subtitle="category.videos.length + ' vidéos'"
          :background-source="category.thumbnailUrl"
          @over="changeBackgroundVideo(category)"
          @click.native="$router.push(category.path)"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import responsive from '@/mixins/responsive'
import CategoryButton from '@/components/CategoryButton.vue'

export default {
  components: {
    CategoryButton
  },

  mixins: [ responsive ],

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
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_fonts.scss';

.home-content {
  display: flex;
  flex-direction: column;
}

%text {
  text-shadow: 0 3px 6px rgba(#000000, 68%);
}

.empty {
  flex-grow: 1;
}

.card-list {
  justify-self: flex-end;
}

.category-buttons {
  margin: auto 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: $extraLarge){
    flex-direction: row;
    margin: auto 5%;
  }

  > * {
    z-index: 1;

    &:hover {
      z-index: 20;
    }
  }
}
</style>
