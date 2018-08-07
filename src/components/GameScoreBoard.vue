<template>
  <div v-show="isGameEnd" class="score-board-container">
    <div class="score-board-wrapper bounceIn animated">
      <div>
        <div v-if="isGameSuccess" class="resultTitle">성공</div>
        <div v-else class="resultTitle">실패</div>
      </div>
      <div class="score">
        {{score}}
      </div>
      <!--<div class="log">-->
      <!--<div class="content-wrapper">-->
      <!--<div class="type" style="color:red;">판매</div>-->
      <!--<div class="price">427원</div>-->
      <!--</div>-->
      <!--<div class="content-wrapper">-->
      <!--<div class="type" style="color:blue;">구매</div>-->
      <!--<div class="price">488원</div>-->
      <!--</div>-->
      <!--</div>-->
      <div class="button">
        <button v-if="isGameSuccess" class="check-button" style="background-color:#003458">진행하기</button>
        <button v-else class="check-button">다시하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'GameScoreBoard',
  props: ['gameStatus', 'isClear', 'totalScore'],
  data () {
    return {
      isGameSuccess: this.isClear,
      isGameEnd: this.gameStatus === 'gameover',
      score: this.totalScore
    }
  },
  methods: {
    nextStage () {
      this.isGameEnd = false
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
  .score-board-wrapper{
    margin:30% auto;
    width:80%;
    height:60%;
    background-image: url('../assets/score_board.png');
    background-size: 300px 300px;
    background-repeat: no-repeat;
  }
  .resultTitle{
    font-size: 25px;
    color: white;
    padding-top: 37px;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
  .score{
    font-size: 35px;
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
    padding: 1.5%;
    cursor: pointer;
  }

</style>
