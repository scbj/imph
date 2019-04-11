<template>
  <div class="not-found-view">
    <GlitchyText>
      <h1 class="title">
        404
      </h1>
    </GlitchyText>
    <h2>Oups ! Vous avez perdu votre chemin</h2>
    <router-link :to="{ name: 'home' }" class="link">
      <span class="link-arrow">←</span>
      Quitter le terrain inconnu
    </router-link>
  </div>
</template>

<script>
import GlitchyText from '@/components/GlitchyText.vue'

export default {
  components: {
    GlitchyText
  }
}
</script>

<style lang="scss" scoped>
.not-found-view {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.title {
  font-size: 4rem;
}

.link {
  margin-top: 5em;
  display: flex;
  align-items: center
}

.link-arrow {
  margin-right: 0.5em;
}
</style>
