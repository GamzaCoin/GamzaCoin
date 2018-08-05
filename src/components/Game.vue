<template>
  <div>
    <game-header></game-header>
    <game-body></game-body>
    <game-footer></game-footer>
  </div>
</template>

<script>
import GameHeader from './GameHeader'
import GameBody from './GameBody'
import GameFooter from './GameFooter'
export default {
  name: 'Game',
  components: {
    'game-header': GameHeader,
    'game-body': GameBody,
    'game-footer': GameFooter
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
