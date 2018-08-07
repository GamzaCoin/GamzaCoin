<template>
  <div class="game">
    <div class="ready" v-show="isReadyShow">
      <div class="goal">{{game.goalDesc}}</div><br><br>
      <div class="count" v-show="delay != 0">{{ delay }}</div>
      <div class="start" v-show="delay == 0">START</div>
    </div>
    <game-header
      :goal="game.goal"
      :numberOfItem="game.numberOfItem"
      :money="game.money"
      :price="this.price"
    />
    <game-body
      :level="game.level"
      :graph="game.graph.getGraph()"
      :timeIndex="game.timeIndex"
      :graphLength="game.graph.graphLength"
      :itemImg="game.itemImg"
      :numberOfItem="game.numberOfItem"
      :history="game.history"
    />
    <game-footer
      v-on:onClickSellOrBuy="onClickSellOrBuy"
      :numberOfItem="game.numberOfItem"
      :money="game.money"
      :level="game.level"
    />
    <game-guide/>
    <game-score-board
      :gameStatus="game.gameStatus"
      :isClear="game.isClear"
      :totalScore="game.totalScore"
      :level="game.level"
      :lastLevel="game.lastLevel"
    />
    <audio ref="bgm">
      <source src="../assets/audio/bgm_apeach.mp3" />
    </audio>
    <audio ref="btn_click_sound">
      <source src="../assets/audio/btn_click.ogg" />
    </audio>
    <audio ref="countdown_sound">
      <source src="../assets/audio/countdown.ogg" />
    </audio>
    <audio ref=sell_buy_sound>
      <source src="../assets/audio/countdown.ogg" />
    </audio>
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
      game: new Game(1),
      isReadyShow: false,
      delay: 3,
      price: 0
    }
  },
  methods: {
    onClickSellOrBuy: function (price) {
      let re = true
      if (this.game.numberOfItem === 0) {
        re = this.game.buy()
      } else {
        re = this.game.sell()
      }
      if (re) {
        this.price = this.game.history[this.game.history.length - 1].price
        this.playSellBuySound()
      }
    },
    readyAndStartGame () {
      this.delay = 3
      let countdownInterval = setInterval(() => {
        this.delay -= 1
        this.playCountdownSound()
        if (this.delay === -1) {
          this.playBGM()
          this.isReadyShow = false
          this.game.startGame()
          clearInterval(countdownInterval)
        }
      }, 1000)
    },
    playBGM () {
      this.$refs.bgm.currentTime = 0
      this.$refs.bgm.play()
    },
    // resetBGM () {
    //   this.$refs.bgm.pause()
    // },
    playBtnClickSound () {
      this.$refs.btn_click_sound.play()
    },
    playCountdownSound () {
      this.$refs.countdown_sound.play()
    },
    playSellBuySound () {
      this.$refs.sell_buy_sound.play()
    }
  },
  created: function () {
    this.$EventBus.$on('playGame', () => {
      this.isReadyShow = true
      this.readyAndStartGame()
    })
    this.$EventBus.$on('nextStage', () => {
      this.level += 1
      this.game = new Game(this.level)
      this.$EventBus.$emit('rerenderComponent')
      this.isReadyShow = true
      this.readyAndStartGame()
    })
    this.$EventBus.$on('retryStage', () => {
      this.game = new Game(this.level)
      this.$EventBus.$emit('rerenderComponent')
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
  z-index: 99999;
  width: 100%;
}

.goal {
  color: black;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  font-size: 150%;
  /* width: 100%; */
  margin-top: 60%;
  font-weight: 700;
}

@media (max-width: 400px) and (min-width: 375px) {
  .goal {
    font-size: 140%;
  }
}

@media (max-width: 374px) and (min-width: 350px) {
  .goal {
    font-size: 135%;
  }
}

@media (max-width: 349px) and (min-width: 320px) {
  .goal {
    font-size: 120%;
  }
}

.count {
  color: black;
  font-size: 100px;
  width: 100%;
  margin: 0 auto;
}

.start {
  color: black;
  font-size: 100px;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  width: 100%;
  margin: 0 auto;
}
</style>
