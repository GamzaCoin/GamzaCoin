<template>
  <div>
    Game Component
    <GameBody></GameBody>
  </div>
</template>

<script>
import GameBody from './GameBody'

export default {
  name: 'Game',
  data () {
    return {}
  },
  components: {
    GameBody: GameBody
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
