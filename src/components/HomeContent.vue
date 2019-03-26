<template>
  <!-- Permet de gérer la différence de template entre les versions dekstop et mobile. -->
  <div class="home-content">
    <h1>imph</h1>
    <h2>Réalisateur numérique</h2>
    <div class="empty" />
    <CardList />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'

export default {
  components: {
    CardList
  }
}
</script>

<style lang="scss" scoped>
.home-content {
  display: flex;
  flex-direction: column;
}

%text {
  margin-left: 32px;
  margin-right: 32px;
  text-shadow: 0 3px 6px rgba(#000000, 68%);
}

h1 {
  @extend %text;
  font-family: Teko;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: .03em;
}

h2 {
  @extend %text;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 400;
}

.empty {
  flex-grow: 1;
}

.card-list {
  justify-self: flex-end;
}
</style>
