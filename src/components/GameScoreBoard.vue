<template>
  <header class="game-score-board" v-bind:class="{ show: show }">
    ScoreBoard
  </header>
</template>

<script>

export default {
  name: 'GameScoreBoard',
  props: ['show'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .game-score-board {
    background-color: #dddddd;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: none;
  }

  .game-score-board.show {
    display: block;
  }
</style>
