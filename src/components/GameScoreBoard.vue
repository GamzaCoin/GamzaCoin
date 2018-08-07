<template>
  <div v-show="this.gameStatus === 'gameover'" class="score-board-container">
    <div class="score-board-wrapper bounceIn animated">
      <div>
        <div v-if="this.isClear" class="resultTitle">성공</div>
        <div v-else class="resultTitle">실패</div>
      </div>
      <div class="score">
        {{this.totalScore}}
      </div>
      <div class="button">
        <button class="check-button" style="background-color:#FFCC00" v-on:click="$router.push('/')">홈으로</button>
        <div v-if="this.level < this.lastLevel">
          <button v-if="this.isClear" class="check-button" style="background-color:#003458" v-on:click="nextStage">다음단계</button>
          <button v-else class="check-button" v-on:click="retryStage">다시하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'GameScoreBoard',
  props: ['gameStatus', 'isClear', 'totalScore', 'level', 'lastLevel'],
  data () {
    return {
      // isGameSuccess: ,
      // isGameEnd: this.gameStatus === 'gameover',
      // score: this.totalScore
    }
  },
  computed: {
    isNextButtonShow () {
      return (this.level < this.lastLevel) && (this.isClear)
    }
  },
  methods: {
    retryStage () {
      this.$EventBus.$emit('retryStage')
    },
    nextStage () {
      this.$EventBus.$emit('nextStage')
    }
  }
}
</script>

<style>
  .score-board-container{
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
  }
  @media (min-width:320px) {
    .score-board-wrapper{
      margin:30% auto;
      width:80%;
      height:60%;
      background-image: url('../assets/score_board.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .resultTitle{
      font-size: 20px;
      color: white;
      padding-top: 13%;
      text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
  }
  @media (min-width:375px){
    .score-board-wrapper{
      margin:30% auto;
      width:80%;
      height:60%;
      background-image: url('../assets/score_board.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .resultTitle{
      font-size: 25px;
      color: white;
      padding-top: 13%;
      text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
  }
  @media (min-width:414px){
    .score-board-wrapper{
      margin:30% auto;
      width:80%;
      height:60%;
      background-image: url('../assets/score_board.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .resultTitle{
      font-size: 25px;
      color: white;
      padding-top: 14.5%;
      text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
  }
  @media (min-width:475px){
    .score-board-wrapper{
      margin:30% auto;
      width:80%;
      height:60%;
      background-image: url('../assets/score_board.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .resultTitle{
      font-size: 25px;
      color: white;
      padding-top: 14.5%;
      padding-bottom: 5%;
      text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
  }
  .score{
    font-size: 45px;
    padding: 20% 0 20% 0;
    color: #FFCC00;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
  .log{
    width: 80%;
    height: 60%;
    margin: 15px auto;
    overflow: hidden;
  }
  .log .title-wrapper{
  }
  .log .type{
    width: 50%;
    display:inline-block;
    float:left;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .log .price{
    width:50%;
    display:inline-block;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: #ffffff;
  }
  .content-wrapper{
  }
  .check-button {
    background: #ff686e;
    color: #ffffff;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    border: 3px solid black;
    border-radius: 20px;
    font-size: 120%;
    font-weight: 600;
    width: 50%;
    padding: 2.5% 1.5% 1.5% 1.5%;
    cursor: pointer;
    margin-top:12px;
    height: 50px;
  }

</style>
