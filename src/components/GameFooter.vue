<template>
  <footer class="game-footer">
    <img class="riding-apeach" v-bind:style="{ left: (timeIndex / graphLength * 100) == 0 ? '-13%' : (timeIndex / graphLength * 100 - 15) + '%'}" src="./../assets/riding-apeach.png" alt="">
    <div class="whole-distance">
      <div
        class="progress-distance"
        v-bind:style="{ width: (timeIndex / graphLength * 100) + '%',
        backgroundColor:
          (timeIndex / graphLength * 100) >= 0 && (timeIndex / graphLength * 100) < 10 ? '#d0ad00' :
          (timeIndex / graphLength * 100) >= 10 && (timeIndex / graphLength * 100) < 20 ? '#d1af00' :
          (timeIndex / graphLength * 100) >= 20 && (timeIndex / graphLength * 100) < 30 ? '#dfbb00' :
          (timeIndex / graphLength * 100) >= 30 && (timeIndex / graphLength * 100) < 40 ? '#efc900' :
          (timeIndex / graphLength * 100) >= 40 && (timeIndex / graphLength * 100) < 50 ? '#fed621' :
          (timeIndex / graphLength * 100) >= 50 && (timeIndex / graphLength * 100) < 60 ? '#ffd700' :
          (timeIndex / graphLength * 100) >= 60 && (timeIndex / graphLength * 100) < 70 ? '#ffe524' :
          (timeIndex / graphLength * 100) >= 70 && (timeIndex / graphLength * 100) < 80 ? '#fff438' :
          (timeIndex / graphLength * 100) >= 80 && (timeIndex / graphLength * 100) < 90 ? '#ffff4b' :
          (timeIndex / graphLength * 100) >= 90 && (timeIndex / graphLength * 100) < 100 ? '#ffff6c' : '#ffff9c'}">
      </div>
    </div>
    <div class="game-info">
      <img class="money-img" src="./../assets/money.png" alt="">
      <span class="money">{{ money }}</span>
      <div></div>
      <img v-show="level === 1" class="item-img" src="./../assets/gamza.png" alt="">
      <img v-show="level === 2" class="item-img" src="./../assets/tomato.png" alt="">
      <img v-show="level === 3" class="item-img" src="./../assets/brocoli.png" alt="">
      <span class="items">{{ numberOfItem }}</span>
    </div>
    <button
      v-if="money==0"
      class="sellButton"
      @click="onClickBtn">
      <span v-show="level === 1">감자 팔기</span>
      <span v-show="level === 2">토마토 팔기</span>
      <span v-show="level === 3">브로콜리 팔기</span>
    </button>
    <button
      v-if="numberOfItem==0"
      class="buyButton"
      @click="onClickBtn">
      <span v-show="level === 1">감자 사기</span>
      <span v-show="level === 2">토마토 사기</span>
      <span v-show="level === 3">브로콜리 사기</span>
    </button>
  </footer>
</template>

<script>

export default {
  name: 'GameFooter',
  props: ['graphLength', 'timeIndex', 'level', 'onClickSellOrBuy', 'numberOfItem', 'money'],
  data () {
    return {
    }
  },
  methods: {
    onClickBtn: function () {
      this.$emit('onClickSellOrBuy')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-footer {
  position: absolute;
  width: 80%;
  left: 10%;
  right: 10%;
}

.riding-apeach {
  width:20%;
  position: absolute;
  bottom: 7.5rem;
  z-index: 900;
  left: 0%;
}

.whole-distance {
  position: absolute;
  background-color: black;
  border-radius: 10px;
  border: 1px solid black;
  width: 100%;
  height: 10px;
  bottom: 7rem;
  z-index: 900;
  /* opacity: 0.7; */
}

.progress-distance {
  background-color: yellow;
  border-radius: 10px;
  border: 1px solid black;
  height: 10px;
  bottom: 7rem;
  z-index: 900;
}
.game-info {
  position: fixed;
  left: 5%;
  bottom: 1.5%;
  text-align: left;
  z-index: 1000;
}

.money-img, .item-img {
  width: 12%;
}

.money, .items {
  position: fixed;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin-top: 2%;
  width: 20%;
  text-align: right;
}

.sellButton, .buyButton {
  position: fixed;
  bottom: 2.5%;
  left: 45%;
  background: #428aff;
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 1.7em;
  font-weight: 600;
  width: 50%;
  padding: 2.4% 1.5% 1.5% 1.5%;
  z-index: 1005;
  height: 85px;
  cursor: pointer;
}

.buyButton {
  background: #ff686e;
}
</style>
