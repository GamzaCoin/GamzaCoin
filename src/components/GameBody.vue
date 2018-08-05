<template>
  <div class="game-body">
    <chart></chart>
  </div>
</template>

<script>
import Chart from './Chart'
export default {
  name: 'GameBody',
  components: {
    'chart': Chart
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-body {
  height: 55vh;
}
</style>
