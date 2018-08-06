<template>
  <header class="game-header">
    <button class="titleButton">LV.1 <span class="item-name">감자</span> 10개로 불리기</button>
  </header>
</template>

<script>

export default {
  name: 'GameHeader',
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
.titleButton {
  position: fixed;
  top: 2%;
  left: 10%;
  background: #9b6b69;
  color: #ffffff;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 200%;
  font-weight: 600;
  width: 80%;
  padding: 1.5%;
}
</style>
