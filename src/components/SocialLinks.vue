<template>
  <div
    class="social-links"
    @mouseleave="mouseLeave()"
  >
    <a
      v-for="(link, key) in links"
      :key="key"
      class="link"
      :href="link.url"
      :target="anchorTarget(link.newTab)"
      @mouseover="mouseOver(link)"
    >
      <img :src="link.base64" class="icon">
    </a>
    <template v-if="gte('medium')">
      <span class="text">
        where ?
      </span>
      <span
        v-for="(link, key) in links"
        :key="key + 100"
        class="label"
        :class="{ active: activeLink === link }"
      >
        {{ link.label }}
      </span>
    </template>
  </div>
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [ responsive ],

  data () {
    const mail = 'imphfilm@gmail.com'
    return {
      activeLink: null,
      links: [
        {
          label: '/imphfilm',
          url: 'https://www.facebook.com/imphfilm/',
          base64: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAAAmJLR0QA/4ePzL8AAABjSURBVEjHY2AYbuA/4/+E/4f+v///9/+7/3f/G5OmecF/ZGBHitag///J17yZEs3PoJqm/xckPbh+QjWLkxPWMMBIgWbybEQHiuRr/vmfmXzNNyhx9mbaB9io5lHNQ0Dz4AYAdCgirAiAop0AAAAASUVORK5CYII=`
        },
        {
          label: '@imphfilm',
          url: 'https://www.instagram.com/imphfilm/',
          base64: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAAAmJLR0QA/4ePzL8AAAEeSURBVEgN3cExbsFhAMbhd8dGJ2YjNVQ1eodWHKg4gapDEImToIfQrVX/rx38B/11EMn7hQRj+zz6B7iix4JvjvliTpeCjqNN4JSElg7R5odzbGkpxhWBc60pyNHjtDua7HTkeOW0JvfszOUIxDb0qZMhQ50BKbEgR2xJRYYqSyJyuA0ViRITAoEpZYlrUowcri9R4oO9FSWJF4wc7kZightL3GLkcFmJgEskchg5XFYi4NYSOYwcri4xxY0kGhg53LNEmRV77xQlhhg53IaqRIkxCQkjihI1UowcsSVVGWq8EZEjEEsZ0CBLlgZDUmKJHAsuMZOjyyWe5CiQcK5P8orRYss5tjzoEC3WnLLmUceRp8OMwDGBGR3y+vt+AecU22yYq66rAAAAAElFTkSuQmCC`
        },
        {
          label: mail,
          url: `mailto:${mail}`,
          newTab: false,
          base64: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAAAmJLR0QA/4ePzL8AAAEgSURBVEiJ7dKvTsNQHMXxw1jIEhJEFUl5gCV077AEPQWOZAngwGF4BQQSN1Dg5oZCYWcRoMAOugfgTwp8J25v6W3pdjFTO66/28897W2lReYc1rnnP3lkw9ItiYChNx0SGCWJT3YkVrn1onesSXR4Nxi+2JdYoT+TDmhI7JKAxfDDscQyF1PpFXWJI74hjwFOJZY4q6Tn1CRO7KWLS8tOSlsXMVxTlzg0D5bFvtRlfljG0JMkuiTZJKErSfTcG8t4TCv9+h3eAPhgO500GU3DMZFExIBAos0zT7QlAm7YlIiIq/CYlkSTF+CBsPDz2tXRX9i22r1f2SMk5CCbxG77L863Vsdpt9iPFrjB/tThBkfFc5yR9HTsefq2Ou2LzDcTTZlFrO38VZwAAAAASUVORK5CYII=`
        }
      ]
    }
  },

  methods: {
    anchorTarget (newTab) {
      return newTab === false ? undefined : '_blank'
    },

    mouseOver (link) {
      this.activeLink = link
    },

    mouseLeave (link) {
      this.activeLink = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.social-links {
  position: relative;
  display: flex;
  flex-direction: row;
  /* grid-gap: 0.8em 1.2em; */
  padding: 1.2em;
  user-select: none;
  transform: translateX(-5px);

  @media screen and (min-width: $medium) {
    filter: brightness(35%);
    transform: translateX(0);
  }

  &:hover {
    filter: brightness(100%);

    .link {
      filter: brightness(75%);

      &:hover {
        filter: brightness(100%);
      }
    }

    .text {
      opacity: 0;
    }

  }
}

.link {
  justify-self: center;
  align-self: center;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
}

.icon {
  $size: 19px;
  width: $size;
  height: $size;
}

.text,
.label {
  position: absolute;
  bottom: -0.3em;
  left: 50%;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
  transform: translateX(-50%);
}

.label {
  opacity: 0;
  transform: translateY(10px) translateX(-50%);
  user-select: all;
  transition: all .2s cubic-bezier(0.215, 0.61, 0.355, 1);

  &.active {
    opacity: 1;
    transition-duration: .3s;
    transform: translateY(0px) translateX(-50%);
  }
}
</style>
