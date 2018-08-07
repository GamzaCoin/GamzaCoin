<template>
  <div class="game-body">
    <div class="graph-container">
      <div class="background"
           v-bind:style="{ width: `calc(100% + ${distanceUnit * (graphLength - 1) / 2 + 100}px)`, transform: `translate(${-1 * distanceUnit * timeIndex / 2}px, ${graph[timeIndex] - graph[0]}px)`}"></div>
      <div class="graph-wrapper">
        <div class="graph"
             :style="`transform: translate(${-1 * distanceUnit * timeIndex}px, ${(graph[timeIndex] - graph[0]) / amplitude * graphHeight / 2}px)`">
          <trend
            :data="graph"
            :gradient="['black']"
            :padding="0"
            :height="graphHeight"
            :width="distanceUnit * graphLength"
            :radius="5"
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
      <div class="item"><img :src="getImgUrl(itemImg)" :class="{spin: timeIndex > 0}"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBody',
  props: ['level', 'graph', 'graphLength', 'timeIndex', 'itemImg', 'numberOfItem', 'history'],
  data () {
    return {
      graphHeight: 800,
      intervalID: 0,
      distanceUnit: 30,
      points: this.history.map(function (x) {
        return x
      })
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
    background-image: url('../assets/background/stage2.png');
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    z-index: 100;
    top:-25%;

    -webkit-transition: transform 0.5s ease;
    -moz-transition: transform 0.5s ease;
    -ms-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  .graph-wrapper {
    z-index: 600;
    width: 80%;
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
    -webkit-transition: transform 0.5s ease;
    -moz-transition: transform 0.5s ease;
    -ms-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  .graph svg path {
    stroke: #ffffff;
    stroke-width: 5;
  }

  .item {
    position:absolute;
    width: 50px;
    heigth: 50px;
    left: 80%;
    top: 56%;
    z-index: 601;
    transform: translateX(-50%);
  }

  .item img {
    width: 100%;
    height: 100%;
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
