<template>
  <div class="game">
    <div class="ready" v-show="isReadyShow">
      <div class="goal">{{game.goalDesc}}</div>
      <div class="count" v-show="delay != 0">{{ delay }}</div>
      <div class="start" v-show="delay == 0">START</div>
    </div>
    <game-header
      :goal="game.goal"
    />
    <game-body
      :graph="game.graph.getGraph()"
      :timeIndex="game.timeIndex"
      :graphLength="game.graph.graphLength"
      :itemImg="game.itemImg"
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
      level: 1,
      game: new Game(3),
      isReadyShow: false,
      delay: 3
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
    },
    readyAndStartGame () {
      setInterval(() => {
        this.delay -= 1
        console.log(this.delay)
        if (this.delay === -1) {
          this.isReadyShow = false
          this.game.startGame()
          // clearInterval(this.startGame)
        }
      }, 1000)
    }
  },
  created: function () {
    this.$EventBus.$on('playGame', () => {
      this.isReadyShow = true
      this.readyAndStartGame()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

game-footer {
  position: fixed;
}

.ready {
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  width: 100%;
}

.count {
  color: white;
  font-size: 100px;
  width: 100%;
  margin: 0 auto;
}

.start {
  color: black;
  font-size: 100px;
  text-shadow: -2px 0 #efcf00, 0 2px #efcf00, 2px 0 #efcf00, 0 -2px #efcf00;
  width: 100%;
  margin: 0 auto;
}
</style>
