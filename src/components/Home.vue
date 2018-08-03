<template>
  <div>
    <button
      @click="startGame"
      class="button">
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

</style>
