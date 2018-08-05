<template>
  <footer class="game-footer">
    <div>보유금액 : {{ money }}</div>
    <div>감자 : {{ numberOfItem }}</div>
    <button
      class="sellButton"
      v-on:click="onClickBtn"
    >모든 감자 팔기</button>
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
  background: #9b6b69;
  height: 30vh;
}

.sellButton {
  margin-top: 4%;
  background: #ff686e;
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 3px solid black;
  border-radius: 10px;
  font-size: 200%;
  font-weight: 600;
  width: 60%;
  padding: 2%;
}
</style>
