<template>
  <div v-show="!isGuideChecked" class="guide-container">
    <div class="guide-wrapper">
      <div class="img-wrapper"></div>
      <button class="check-button" v-on:click="checkGuide">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameGuide',
  data () {
    return {
      isGuideChecked: false
    }
  },
  methods: {
    checkGuide () {
      this.isGuideChecked = !this.isGuideChecked
      this.$EventBus.$emit('playGame')
    }
  }
}
</script>

<style>
  .guide-container{
    background-color: rgb(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
  }
  .guide-wrapper{
    width: 300px;
    margin: 20% auto;
  }
  .img-wrapper{
    background-image: url('../assets/guide.png');
    background-size: 300px 300px;
    width: 300px;
    height: 300px;
  }
  .check-button {
    background: #ff686e;
    margin-top: 50px;
    color: #ffffff;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    border: 3px solid black;
    border-radius: 20px;
    font-size: 120%;
    font-weight: 600;
    width: 50%;
    padding: 1.5%;
    cursor: pointer;
  }
</style>
