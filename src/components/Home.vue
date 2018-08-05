<template>
  <div class="home">
    <div class="game-info">
      <img class="game-title" src="./../assets/game-title.png" alt="">
      <img class="game-logo" src="./../assets/game-logo.png" alt="">
    </div>
    <div class="scores">
      <div class="entire-best-score">전체 최고점수</div>
      <div class="my-best-score">내 최고점수</div>
      <div class="my-rank">내 랭킹</div>
    </div>
    <div class="buttons">
      <!-- <button
        @click="startStory"
        class="storyButton">
        STORY
      </button> -->
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
.game-info {
}

.game-title {
  width: 80%;
}

.game-logo {
  width: 70%;
}

/* score */
.scores {
  width: 80%;
  border-radius: 10px;
  border: 1px solid transparent;
  margin-left: 10%;
  background-color: #7c5b59;
  margin-top: 1%;
}

.entire-best-score, .my-best-score, .my-rank {
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 100%;
  text-align: left;
  border-bottom: 1px solid #9b6b69;
  padding-left: 7%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}

.my-rank {
  border-bottom: none;
}

/*  button */
.buttons {
  margin-top: 3%;
}
.storyButton {
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 1.5px solid black;
  border-radius: 10px;
  background-color: yellow;
  font-size: 200%;
  font-weight: 600;
  width: 80%;
  padding: 1.5%;
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
  .startButton, .storyButton {
    font-size: 150%;
  }
}

@media (min-width: 501px) {
  .startButton, .storyButton {
    font-size: 300%;
  }
}

@media (min-width: 769px) {
  .startButton, .storyButton {
    font-size: 400%;
  }
}

</style>
