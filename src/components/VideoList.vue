<template>
  <StaggeredList class="video-list">
    <VideoItem
      v-for="(video, index) in videos"
      :key="index"
      :data-index="index"
      :video="video"
    />
  </StaggeredList>
</template>

<script>
import StaggeredList from '@/components/StaggeredList.vue'
import VideoItem from '@/components/VideoItem.vue'

export default {
  components: {
    StaggeredList,
    VideoItem
  },

  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.videos {
  flex-grow: 1;
  list-style: none;
  margin: 8rem 0;
}
</style>
