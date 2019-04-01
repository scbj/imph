<template>
  <div class="test-font-canvas" :style="style">
    <h1>Imph ou IMPH ou imphfilm ou IMPHFILM ou IMPHfilm</h1>
    <h2>Aftermovies et clips musicaux</h2>
    <h3>A suivre sur Instagram @imphfilm</h3>
    <h2>aftermovies</h2>
    <p>Filmer dans le plus beau club de France. Amnesia - NAMTO. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore excepturi eaque perferendis accusamus est neque sequi, totam vitae, illo voluptatum eveniet voluptas quos consectetur. Neque id autem quae. Vel.</p>
    <p>AMZ - Bigo (Clip)</p>
    <p>
      <b>Reine & Roit</b><br>
      Special Guests :<br>
      NAMTO<br>
      DJ LUCKY<br>
      <b>Julien Geloën</b><br>
      Sugar Daddy
    </p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  },

  computed: {
    style () {
      return {
        color: this.color,
        backgroundColor: this.background
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Style for component presentation
.test-font-canvas {
  padding: 2rem;
}

::selection {
  background: rgba(white, 0.996);
  color: black;
}

// Font customizations
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');

h1 {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.06em;
  font-weight: 300;
  letter-spacing: .07em;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.04em;
  padding-top: 1em;
}

h3 {
  display: none;
  font-family: 'Teko', sans-serif;
  // letter-spacing: 0.09em;
  font-weight: 300;
  font-size: 1.6rem;
}

p {
  text-align: justify;
  text-justify: distribute;
  font-family: 'Roboto', sans-serif;
  line-height: 1.60em;
  // font-weight: 600;
  padding: 0.6em 0;
}
</style>
