<template>
  <div class="game">
    <div class="ready" v-show="isReadyShow">
      <div class="goal">{{game.goalDesc}}</div>
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
    />
    <game-footer
      v-on:onClickSellOrBuy="onClickSellOrBuy"
      :numberOfItem="game.numberOfItem"
      :money="game.money"
    />
    <game-score-board
      v-show="game.gameStatus === 'gameover'"
    />
    <game-guide/>
    <audio ref="bgm">
      <source src="../assets/audio/bgm_apeach.mp3" />
    </audio>
    <audio ref="btn_click_sound">
      <source src="../assets/audio/btn_click.ogg" />
    </audio>
    <audio ref="countdown_sound">
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
import GameOver from './GameOver'

import Game from './Game/Game'

export default {
  name: 'Game',
  components: {
    'game-header': GameHeader,
    'game-body': GameBody,
    'game-footer': GameFooter,
    'game-score-board': GameScoreBoard,
    'game-guide': GameGuide,
    'game-over': GameOver
  },
  data () {
    return {
      level: 1,
      game: new Game(3),
      isReadyShow: false,
      delay: 3,
      price: 0
    }
  },
  methods: {
    onClickSellOrBuy: function (price) {
      console.log('in onClickSellOrBuy', this.game)
      if (this.game.numberOfItem === 0) {
        this.game.buy()
      } else {
        this.game.sell()
      }
      this.price = this.game.history[this.game.history.length - 1].price
    },
    readyAndStartGame () {
      let countdownInterval = setInterval(() => {
        this.delay -= 1
<<<<<<< HEAD
=======
        this.playCountdownSound()
>>>>>>> ae9f52722c9a85e58112c63ec66e2f6bb866f2e8
        if (this.delay === -1) {
          this.playBGM()
          this.isReadyShow = false
          this.game.startGame()
          clearInterval(countdownInterval)
        }
      }, 1000)
    },
    playBGM () {
      this.$refs.bgm.play()
    },
    resetBGM () {
      this.$refs.bgm.pause()
      this.$refs.bgm.currentTime = 0
    },
    playBtnClickSound () {
      this.$refs.btn_click_sound.play()
    },
    playCountdownSound () {
      this.$refs.countdown_sound.play()
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

.goal {
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 18px;
  margin-top: 60%;
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
