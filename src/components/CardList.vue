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
    </ul>
    <div class="stepper">
      <div
        v-for="(category,index) in categories"
        :key="index"
        class="step"
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
        },
        {

          title: 'clips musicaux',
          subtitle: '9 vidéos',
          backgroundSource: 'http://img.youtube.com/vi/jJNnYEBzk5Y/maxresdefault.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  list-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  // width: 100%;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
      display: none;
  }
}

.card-item {
  margin-right: 18px;
  margin-right: 1.19rem;

  &:first-of-type {
    margin-left: 110px;
  }
}

.stepper {
  margin: 32px auto 38px auto;
}

.step {
  background: rgba(#ffffff, 40%);
  border-radius: 2px;
  margin-right: 10px;
  display: inline-block;
  width: 16px;
  height: 2px;

  &:first-of-type {
    background: #ffffff;
    width: 22px;
  }
}
</style>
