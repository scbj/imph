<template>
  <button
    :style="backgroundImage"
    class="category-button"
    @mouseover="$emit('over')"
  >
    <router-link class="yo" :to="link">
      {{ title | lowerCase }}
    </router-link>
    <span>{{ subtitle }}</span>
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

$easing: cubic-bezier(.215, .61, .355, 1);

// Reset Button Default Style
.category-button {
  cursor: pointer;
  outline: none;
  border: solid 1px rgba(white, 8%);
  border-radius: 7px;
  position: relative;
}

.category-button {
  opacity: .3;
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 300%;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  height: 200px;
  transition:
    background .2s $easing,
    opacity .3s $easing,
    transform .3s $easing;

  &::after {
    @extend %pseudo-element;
    opacity: 0;
    background: transparent;
    border-radius: 7px;
    box-shadow: 0px 15px 45px rgba(#000000, 40%);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1;
    background-size: 320%;
    background-position: 40% 45%;
    transform: translateY(-18px) scale(1.05);

    &::after {
      opacity: 1;
    }

    a {
      transform: scale(1.05);
    }

    span {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media screen and (min-width: $extraLarge) {
    margin: 1rem;
    width: 400px;
    height: 250px;
  }

  a {
    font-family: 'Teko';
    font-size: 42px;
    letter-spacing: .1em;
    color: white;
    text-decoration: none;
    text-shadow: 0 0px 70px rgba(#000000, 50%);
    transition: all .6s $easing .1s;
  }

  span {
    opacity: 0;
    font-family: 'Roboto Mono';
    font-size: 14px;
    color: white;
    position: absolute;
    bottom: 33%;
    left: 50%;
    text-shadow: 0 0px 70px rgba(#000000, 50%);
    transform: translateX(-50%) translateY(100px);
    transition: all .3s $easing;
  }
}
</style>
