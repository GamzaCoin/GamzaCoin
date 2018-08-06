<template>
  <div class="game">
    <game-header />
    <game-body
      :graph="game.graph.getGraph()"
      :timeIndex="game.timeIndex"
      :graphLength="game.graph.graphLength"
    />
    <game-footer
      v-on:onClickSellOrBuy="onClickSellOrBuy"
      :numberOfItem="game.numberOfItem"
      :money="game.money"
    />
    <game-score-board
      :show="game.gameStatus === 'gameover'"
    />
    <game-guide
      />
  </div>
</template>

<script>
import GameHeader from './GameHeader'
import GameBody from './GameBody'
import GameFooter from './GameFooter'
import GameScoreBoard from './GameScoreBoard'
import GameGuide from './GameGuide'

import Game from './Game/Game'

export default {
  name: 'Game',
  components: {
    'game-header': GameHeader,
    'game-body': GameBody,
    'game-footer': GameFooter,
    'game-score-board': GameScoreBoard,
    'game-guide': GameGuide
  },
  data () {
    return {
      game: new Game(1000)
    }
  },
  methods: {
    onClickSellOrBuy: function (price) {
      console.log('in onClickSellOrBuy', this.game, price)
      if (this.game.numberOfItem === 0) {
        this.game.buy()
      } else {
        this.game.sell()
      }
    }
  },
  created: function () {
    this.$EventBus.$on('playGame', () => {
      this.game.startGame()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

game-footer {
  position: fixed;
}
</style>
