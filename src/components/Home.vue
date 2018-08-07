<template>
  <div class="home">
    <div class="game-info">
      <img class="game-title" src="./../assets/game-title.png" alt="">
      <img class="game-logo" src="./../assets/game-logo.png" alt="">
    </div>
    <div class="buttons">
      <button
        @click="startGame"
        class="startButton">
        START
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    startGame () {
      this.$router.push('/game')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* home */
.home {
  background-color: #9b6b69;
  height: 100vh;
  display: flex;
  flex-direction: column ;
  justify-content: center;
}

/* game information */

.game-title {
  width: 80%;
}

.game-logo {
  width: 70%;
}

/*  button */
.buttons {
  margin-top: 3%;
}

.startButton {
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 1.5px solid black;
  border-radius: 10px;
  background-color: #efcf00;
  font-size: 200%;
  font-weight: 600;
  width: 80%;
  padding: 1.5%;
}

@media (max-width: 359px) {
  .startButton {
    font-size: 150%;
  }
}

@media (min-width: 501px) {
  .startButton {
    font-size: 300%;
  }
}

@media (min-width: 769px) {
  .startButton {
    font-size: 400%;
  }
}

</style>
