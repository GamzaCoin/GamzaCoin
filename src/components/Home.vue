<template>
  <div>
    <div
      class="title">
      감자 코인
    </div>
    <button
      class="startButton"
      type="button"
      @click="startGame">
      게임 시작
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    startGame () {
      this.$router.push('/game')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
}
.title {
}
.startButton {
}
</style>
