<template>
  <StaggeredList class="video-list">
    <VideoItem
      v-for="(video, index) in videos"
      :key="index"
      :data-index="index"
      :video="video"
      :reverse-alignement="!!(lte('small') && index % 2)"
    />
  </StaggeredList>
</template>

<script>
import responsive from '@/mixins/responsive'

import StaggeredList from '@/components/StaggeredList.vue'
import VideoItem from '@/components/VideoItem.vue'

export default {
  components: {
    StaggeredList,
    VideoItem
  },

  mixins: [ responsive ],

  props: {
    videos: {
      type: Array,
      required: true
    }
  }
}
</script>
