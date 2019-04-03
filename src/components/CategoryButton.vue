<template>
  <button
    :style="backgroundImage"
    class="category-button"
    @mouseover="$emit('over')"
  >
    <div class="content">
      <router-link class="yo" :to="link">
        {{ title | lowerCase }}
      </router-link>
      <span>{{ subtitle }}</span>
    </div>
  </button>
</template>

<script>
import backgroundImage from '@/mixins/backgroundImage'
import { lowerCase } from '@/filters/string'

export default {
  filters: {
    lowerCase
  },

  mixins: [ backgroundImage ],

  props: {
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars.scss';
@import '../assets/styles/_abstracts.scss';
@import '../assets/styles/_fonts.scss';

.category-button {
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 300%;
  border-radius: 7px;
  margin: 2rem;
  padding: 1rem;
  opacity: .3;
  width: 400px;
  height: 200px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 15px -5px #000000;

  @media screen and (min-width: $extraLarge) {
    width: 400px;
    height: 200px;
  }

  @media screen and (min-width: $thatsbig) {
    width: 400px;
    height: 250px;
  }
}

.content {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
  justify-items: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;

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
}

// Animations
$easing: cubic-bezier(.215, .61, .355, 1);

.category-button {
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
