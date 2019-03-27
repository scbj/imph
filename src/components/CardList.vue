<template>
  <div class="card-list">
    <ul>
      <CardItem
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :subtitle="category.subtitle"
        :background-source="category.backgroundSource"
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
import CardItem from '@/components/CardItem.vue'

export default {
  components: {
    CardItem
  },

  data () {
    return {
      itemVisibleIndex: 0,
      categories: [
        {
          title: 'Aftermovies',
          subtitle: '12 vidéos',
          backgroundSource: 'http://img.youtube.com/vi/VCufnewSegs/maxresdefault.jpg'
        },
        {

          title: 'clips musicaux',
          subtitle: '9 vidéos',
          backgroundSource: 'http://img.youtube.com/vi/jJNnYEBzk5Y/maxresdefault.jpg'
        }
      ]
    }
  },

  computed: {
    itemCount () {
      return this.categories.length + 1
    }
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
