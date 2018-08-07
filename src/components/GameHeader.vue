<template>
  <header class="game-header">
    <div class="gauge">
      <img
        v-show="(price * numberOfItem + money) / goal * 100 <= 20"
        class="apeach" src="./../assets/apeach/apeach1.png" alt="">
      <img
        v-show="(price * numberOfItem + money) / goal * 100 > 20 && (price * numberOfItem + money) / goal * 100 <= 40"
        class="apeach" src="./../assets/apeach/apeach2.png" alt="">
      <img
        v-show="(price * numberOfItem + money) / goal * 100 > 40 && (price * numberOfItem + money) / goal * 100 <= 60"
        class="apeach" src="./../assets/apeach/apeach3.png" alt="">
      <img
        v-show="(price * numberOfItem + money) / goal * 100 > 60 && (price * numberOfItem + money) / goal * 100 <= 80"
        class="apeach" src="./../assets/apeach/apeach4.png" alt="">
      <img
        v-show="(price * numberOfItem + money) / goal * 100 > 80"
        class="apeach" src="./../assets/apeach/apeach5.png" alt="">
      <div class="full-percent">
        <div
          class="percent"
          v-show="(price * numberOfItem + money) / goal * 100 <= 20"
          v-bind:style="{ width: ((price * numberOfItem + money) / goal * 100)+'%', backgroundColor: 'red'}">
          <span class="percent-text">
            {{ (price * numberOfItem + money) / goal * 100 | integerlize }}
          </span>
        </div>
        <div
          class="percent"
          v-show="(price * numberOfItem + money) / goal * 100 > 20 && (price * numberOfItem + money) / goal * 100 <= 40"
          v-bind:style="{ width: ((price * numberOfItem + money) / goal * 100)+'%', backgroundColor: '#f47d42'}">
          <span class="percent-text">
            {{ (price * numberOfItem + money) / goal * 100 | integerlize }}
          </span>
        </div>
        <div
          class="percent"
          v-show="(price * numberOfItem + money) / goal * 100 > 40 && (price * numberOfItem + money) / goal * 100 <= 60"
          v-bind:style="{ width: ((price * numberOfItem + money) / goal * 100)+'%'}">
          <span class="percent-text">
            {{ (price * numberOfItem + money) / goal * 100 | integerlize }}
          </span>
        </div>
        <div
          class="percent"
          v-show="(price * numberOfItem + money) / goal * 100 > 60 && (price * numberOfItem + money) / goal * 100 <= 80"
          v-bind:style="{ width: ((price * numberOfItem + money) / goal * 100)+'%', backgroundColor: '#00ff99'}">
          <span
            v-bind:style="{ color: 'black' }"
            class="percent-text">
            {{ (price * numberOfItem + money) / goal * 100 | integerlize }}
          </span>
        </div>
        <div
          class="percent"
          v-show="(price * numberOfItem + money) / goal * 100 > 80"
          v-bind:style="{ width: ((price * numberOfItem + money) / goal * 100)+'%', backgroundColor: '#2b77e2'}">
          <span class="percent-text">
            {{ (price * numberOfItem + money) / goal * 100 | integerlize }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'GameHeader',
  props: ['level', 'goal', 'goalDesc', 'numberOfItem', 'money', 'price'],
  data () {
    return {
      goal_: this.goal,
      numberOfItem_: this.numberOfItem,
      money_: this.money,
      price_: this.price,
      percent: 0
    }
  },
  computed: {
    integerPercent () {
      return Math.floor((this.price_ * this.numberOfItem_ + this.money_) / this.goal_ * 100)
    }
  },
  filters: {
    integerlize (value) {
      let percent = Math.floor(value)
      return percent
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

.apeach {
  top: 50%;
  left: 20%;
  margin-left: 25%;
  /* position:absolute; */
  width: 80px;
  padding: 1%;
  border: 3px solid #b29874;
  background-color: #b29874;
  border-radius: 50px;
  z-index: 10000;
}

.full-percent {
  /* position: absolute; */
  border: 1px solid grey;
  background-color: grey;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 3%;
  top: 30%;
  z-index:-1;
  width: 315%;
  margin-top: -70%;
  margin-left: 120%;
}

@media (max-width: 400px) and (min-width: 375px) {
  .full-percent {
    width: 275%;
  }
}

@media (max-width: 374px) and (min-width: 350px) {
  .full-percent {
    width: 260%;
  }
}

@media (max-width: 349px) and (min-width: 320px) {
  .full-percent {
    width: 210%;
  }
}
.percent {
  border: 1px solid transparent;
  background-color: #ffc300;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  /* margin-left: 20%; */
  margin-right: 50%;
}

.percent-text {
  font-weight: 600;
  color: #ffffff;
}
</style>
