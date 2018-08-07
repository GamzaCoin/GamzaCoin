<template>
  <footer class="game-footer">
    <div class="game-info">
      <img class="money-img" src="./../assets/money.png" alt="">
      <span class="money">{{ money }}</span>
      <div></div>
      <img class="item-img" src="./../assets/gamza.png" alt="">
      <span class="items">{{ numberOfItem }}</span>
    </div>
    <button
      v-if="money==0"
      class="sellButton"
      @click="onClickBtn">
      <span>모든 감자 팔기</span>
    </button>
    <button
      v-if="numberOfItem==0"
      class="buyButton"
      @click="onClickBtn">
      <span>모든 감자 사기</span>
    </button>
  </footer>
</template>

<script>

export default {
  name: 'GameFooter',
  props: ['onClickSellOrBuy', 'numberOfItem', 'money'],
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
  bottom: 0%;
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
  bottom: 3.5%;
  left: 45%;
  background: #ff686e;
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 120%;
  font-weight: 600;
  width: 50%;
  padding: 1.5%;
  z-index: 1000;
  cursor: pointer;
}

.buyButton {
  background: #428aff;
}
</style>
