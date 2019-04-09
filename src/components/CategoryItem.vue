<template>
  <li :style="backgroundImage" class="category-item">
    <h2 class="label">
      {{ category.label | lowerCase }}
    </h2>
    <span class="description">{{ videoCount + ' vidéos' }}</span>
  </li>
</template>

<script>
import { lowerCase } from '@/filters/string'

export default {
  filters: {
    lowerCase
  },

  props: {
    category: {
      type: Object,
      required: true
    }
  },

  computed: {
    videoCount () {
      return this.category.videos && this.category.videos.length
    },

    backgroundImage () {
      return {
        backgroundImage: `url(${this.category.thumbnailUrl})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_vars.scss";
@import "../assets/styles/_abstracts.scss";
@import "../assets/styles/_fonts.scss";

.category-item {
  // Background image properties
  background-color: #000000;
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 300%;
  // Aspect
  border-radius: 7px;
  $margin: 2rem;
  margin: $margin 0;
  padding: 1rem;
  display: inline-grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  align-items: stretch;
  height: 16rem;
  min-width: 21.5rem;
  max-width: 28rem;
  max-height: 15.4rem;
  // Position
  position: relative;
  overflow: hidden;
  // Effects
  user-select: none;
  cursor: pointer;
  box-shadow: 0px 5px 15px -5px #000000;

  @media screen and (min-width: 600px) {
    margin: $margin;
  }
  @media screen and (min-width: $medium) {
    opacity: 0.7;
  }
}

.label {
  margin: 0;
  grid-row: 2/3;
  grid-column: 1/2;
  text-align: center;
  text-shadow: 0 .04em .5em rgba(#000000, 20%);
}

.description {
  line-height: 0.5em;
  color: white;
  grid-row: 3/4;
  grid-column: 1/2;
  transform: translateY(0);
  text-shadow: 0 .04em .5em rgba(#000000, 30%);

  @media screen and (min-width: $medium) {
    opacity: 0;
    transform: translateY(100px);
  }
}

// Animations only on PC
@media screen and (min-width: $medium) {
  $easing: cubic-bezier(0.215, 0.61, 0.355, 1);

  .category-item {
    transition: background 0.2s $easing, opacity 0.3s $easing,
    transform 0.3s $easing, box-shadow 0.3s $easing;

    &:hover {
      background-size: 320%;
      background-position: 40% 45%;
      opacity: 1;
      transform: translateY(-18px) scale(1.05);
      box-shadow: 0px 15px 45px -10px rgba(#000000, 60%);

      .label {
        transform: scale(1.05);
      }

      .description {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .label {
    transition: all 0.6s $easing 0.1s;
  }
  .description {
    transition: all 0.3s $easing;
  }
}
</style>
