<template>
  <div class="game">
    <game-header />
    <game-body
      :graph="this.game.graph.getGraph()"
      :timeIndex="this.game.timeIndex"
    />
    <game-footer
      v-on:onClickSellOrBuy="onClickSellOrBuy"
      :numberOfItem="game.numberOfItem"
      :money="game.money"
    />
  </div>
</template>

<script>
import GameHeader from './GameHeader'
import GameBody from './GameBody'
import GameFooter from './GameFooter'
import Game from './Game/Game'

export default {
  name: 'Game',
  components: {
    'game-header': GameHeader,
    'game-body': GameBody,
    'game-footer': GameFooter
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
  mounted: function () {
    this.game.startGame()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

game-footer {
  position: fixed;
}
</style>
