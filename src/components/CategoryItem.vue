<template>
  <li :style="backgroundImage" class="category-item">
    <h3>
      {{ category.label | lowerCase }}
    </h3>
    <span>{{ videoCount + ' vidéos' }}</span>
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
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_abstracts.scss';
@import '../assets/styles/_fonts.scss';

.category-item {
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 300%;
  border-radius: 7px;
  margin: 2rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
  justify-items: stretch;
  align-items: stretch;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 15px -5px #000000;
}

a {
  @extend %heading-3;
  color: white;
  text-decoration: none;
  margin: 0;
  grid-row: 2/3;
  grid-column: 1/2;
  text-shadow: 0 0px 55px #000000;
}

span {
  line-height: 0.5em;
  color: white;
  opacity: 0;
  grid-row: 3/4;
  grid-column: 1/2;
  transform: translateY(100px);
  text-shadow: 0 0px 70px rgba(#000000, 50%);
}

// Animations
$easing: cubic-bezier(.215, .61, .355, 1);

.category-item {
  transition:
    background .2s $easing,
    opacity .3s $easing,
    transform .3s $easing,
    box-shadow .3s $easing;

    a { transition: all .6s $easing .1s; }
    span { transition: all .3s $easing; }

    &:hover {
      background-size: 320%;
      background-position: 40% 45%;
      opacity: 1;
      transform: translateY(-18px) scale(1.05);
      box-shadow: 0px 15px 45px -10px rgba(#000000, 60%);

      a { transform: scale(1.05); }

      span {
        opacity: 1;
        transform: translateY(0);
      }
    }
}
</style>
