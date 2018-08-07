<template>
  <footer class="game-footer">
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
  props: ['level', 'onClickSellOrBuy', 'numberOfItem', 'money'],
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
