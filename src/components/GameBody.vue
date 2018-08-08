<template>
  <div class="game-body">
    <div class="graph-container">
      <div v-bind:class="`background stage${level}`"
           v-bind:style="{ width: `calc(100% + ${distanceUnit * (graphLength - 1) / 2 + 100}px)`, transform: `translate(${-1 * distanceUnit * timeIndex / 2}px, ${graph[timeIndex] - graph[0]}px)`, transitionDuration: `${timeUnit / 1000 * 0.7 }s`}"></div>
      <div class="graph-wrapper">
        <div class="graph"
             :style="{
                transform: `translate(${-1 * distanceUnit * timeIndex}px, ${(graph[timeIndex] - graph[0]) / amplitude * graphHeight / 2}px)`,
                top: `calc(50vh - ${graphHeight / 2}px)`,
                transitionDuration: `${timeUnit / 1000 * 0.7 }s`
        }">
          <trend
            :data="graph"
            :gradient="['black']"
            :padding="0"
            :height="graphHeight"
            :width="distanceUnit * graphLength"
            :radius="8"
            :max="graph[0] + amplitude"
            :min="graph[0] - amplitude"
            smooth>
          </trend>
          <div class="guide-line" v-show="numberOfItem" :style="{width: `${distanceUnit * graphLength}px`, transform:`translate(0, ${history.length ? (graph[0] - history[history.length - 1].price) / amplitude * graphHeight / 2 + graphHeight / 2: 0}px)`}"></div>
          <div class="point-list">
            <div v-for="(point, index) in history" :key="index" class="point" :style="{backgroundColor: `${point.type === 'buy' ? '#ff686e' : '#428aff'}`, left: `${distanceUnit * point.timeIndex}px`, top: `${history.length ? (graph[0] - point.price) / amplitude * graphHeight / 2 + graphHeight / 2: 0}px`}"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="getImgUrl(itemImg)" :class="{spin: timeIndex > 0}"/>
        <div class="market-price" :class="{up: fluctuation > 0, down: fluctuation < 0, zero: fluctuation === 0}">{{graph[timeIndex]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBody',
  props: ['level', 'graph', 'graphLength', 'timeIndex', 'itemImg', 'numberOfItem', 'history', 'timeUnit'],
  data () {
    return {
      graphHeight: 800,
      intervalID: 0,
      distanceUnit: 30,
      points: this.history.map(function (x) {
        return x
      }),
      backgroundImage: 'stage1'
    }
  },
  watch: {
    level: function (val) {
      console.log('watch level: ', val)
      switch (val) {
        case 2 :
          this.backgroundImage = 'stage2'
          break
        case 3 :
          this.backgroundImage = 'stage3'
          break
        default :
          this.backgroundImage = 'stage1'
          break
      }
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/' + img)
    }
  },
  computed: {
    amplitude: function () {
      return Math.max(Math.abs(this.graph[0] - Math.max.apply(null, this.graph)), Math.abs(this.graph[0] - Math.min.apply(null, this.graph))) + 10
    },
    fluctuation: function () {
      return this.timeIndex ? Math.round((this.graph[this.timeIndex] - this.graph[this.timeIndex - 1]) / this.graph[this.timeIndex - 1] * 1000) / 10 : 0
    }
  },
  created: function () {
    this.$EventBus.$on('rerenderComponent', () => {
      console.log('rerender')
      Object.assign(this.$data, this.$options.data.apply(this))
    })
  }
}
</script>

<style>
  .game-body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .graph-container {
    position: relative;
    height: 100%;
  }

  .background {
    height: 150%;
    background-image: url('../assets/background/stage1.png');
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    z-index: 100;
    top:-25%;

    -webkit-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -moz-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -ms-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -o-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);

  }
  .stage1 {  background-image: url('../assets/background/stage1.png');  }
  .stage2 {  background-image: url('../assets/background/stage2.png');  }
  .stage3 {  background-image: url('../assets/background/stage3.png');  }

  .graph-wrapper {
    z-index: 600;
    width: 75%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .graph {
    position: absolute;
    z-index: 550;
    height: 100%;
    width: 100%;
    left: 100%;

    -webkit-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -moz-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -ms-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    -o-transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);
    transition: transform 0.5s cubic-bezier(0.4, 0.4, 0.8, 1);

  }

  .graph svg path {
    stroke: #ffffff;
    stroke-width: 5;
  }

  .item {
    position:absolute;
    width: 50px;
    heigth: 50px;
    left: 75%;
    top: 50%;
    z-index: 601;
    transform: translate(-50%, -50%);
  }

  .item img {
    width: 100%;
    height: 100%;
  }

  .item .market-price {
    position: absolute;
    width: 50px;
    top: 50%;
    left: calc(100% + 5px);
    z-index: 601;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1.5em;
    white-space: nowrap;
    color: #ffffff;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }

  .spin {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  .guide-line {
    height: 2px;
    left: 0;
    top: 0;
    border-bottom: 3px dashed #999999;
    position: absolute;
  }

  .point-list {
    position: absolute;
    left: 0;
    top: 0;
  }

  .point-list .point {
    width: 25px;
    height: 25px;
    border-radius: 50px;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 6002;
  }

</style>
