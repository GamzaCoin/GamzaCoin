<template>
  <div class="score-board-container">
    <div v-if="isGameSuccess" class="success-img"></div>
    <div v-else class="fail-img"></div>
    <div class="score-board-wrapper">
      <div>
        <div v-if="isGameSuccess" class="resultTitle">성공!</div>
        <div v-else class="resultTitle">실패...</div>
      </div>
      <div class="score">
        내 점수 : {{score}}원
      </div>
      <div class="log">
        <div class="title-wrapper">
          <div class="type">
            구분
          </div>
          <div class="price">
            가격
          </div>
        </div>
        <div class="content-wrapper">
          <div class="type">판매</div>
          <div class="price">427원</div>
        </div>
        <div class="content-wrapper" style="background-color:#88ce99">
          <div class="type">구매</div>
          <div class="price">488원</div>
        </div>

      </div>
      <div class="button">
        <button v-if="isGameSuccess" class="check-button" style="background-color:#003458">진행하기</button>
        <button v-else class="check-button" >다시하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'GameOver',
  data () {
    return {
      isGameSuccess: false,
      score: 1000
    }
  }
}
</script>

<style>
  .success-img{
    background-image: url('../assets/success.png');
    background-size: 100px 100px;
    width:100px;
    height:100px;
    margin: 15% auto 0 auto;
  }
  .fail-img{
    background-image: url('../assets/fail.png');
    background-size: 120px 120px;
    width:100px;
    height:100px;
    margin: 15% auto 0 auto;
  }
  .score-board-container{
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
  }
  .score-board-wrapper{
    border: 5px solid black;
    margin:0 auto;
    width:80%;
    height:60%;
    border-radius:20%;
    background-color:#ffffff;
  }
  .resultTitle{
    font-size:40px;
  }
  .score{
    font-size: 20px;
  }
  .log{
    width: 80%;
    height: 60%;
    border: solid 3px #c38c8c;
    border-radius: 20%;
    margin: 15px auto;
    overflow: hidden;
  }
  .log .title-wrapper{
    border-bottom: solid 3px #c38c8c;
    padding: 5px 0 5px 0;
    background-color:#b6b999;
  }
  .log .type{
    width: 50%;
    display:inline-block;
    float:left;
  }
  .log .price{
    width:50%;
    display:inline-block;
  }
  .content-wrapper{
    padding: 5px 0 5px 0px;
    background-color: #ece6cc;
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
