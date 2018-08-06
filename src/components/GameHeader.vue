<template>
  <header class="game-header">
    <!-- <button class="title" disabled>LV.{{level}} <span class="item-name">감자</span> 10개로 불리기</button> -->
    <div class="gauge">
      <img class="apeach" src="./../assets/apeach/apeach1.png" alt="">
      <!-- <div class="peach-face"></div> -->
      <div class="full-percent">
        <div class="percent"><span class="percent-text">65%</span></div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'GameHeader',
  props: ['level', 'goal', 'goalDesc'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-header {
  position: fixed;
  z-index: 1000;
}

.item-name {
  color: #f7931e;
}
.title {
  position: fixed;
  top: 2%;
  left: 10%;
  background: #9b6b69;
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 150%;
  font-weight: 600;
  width: 80%;
  padding: 1.5%;
}

.apeach {
  top: 50%;
  left: 50%;
  position:absolute;
  width: 50%;
  padding: 2%;
  border: 3px solid #b29874;
  background-color: #b29874;
  border-radius: 50px;
  z-index: 10000;
}

.full-percent {
  position: absolute;
  border: 1px solid grey;
  background-color: grey;
  border-radius: 20px;
  width: 100%;
  padding: 3%;
  top: 30%;
  left: 50%;
}

.percent {
  border: 1px solid #ffc300;
  background-color: #ffc300;
  border-radius: 20px;
  width: 60%;
}
</style>
