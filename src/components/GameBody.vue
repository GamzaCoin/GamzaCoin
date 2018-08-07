<template>
  <div class="game-body">
    <div class="graph-container">
      <div class="background"
           v-bind:style="{ width: `calc(100% + ${distanceUnit * (graphLength - 1) / 2 + 100}px)`, transform: `translate(${-1 * distanceUnit * timeIndex / 2}px, ${graphData[timeIndex] - graphData[0]}px)`}"></div>
      <div class="graph-wrapper">
        <div class="graph"
             :style="`transform: translate(${-1 * distanceUnit * timeIndex}px, ${(graphData[timeIndex] - graphData[0]) / amplitude * graphHeight / 2}px)`">
          <trend
            :data="graphData"
            :gradient="['black']"
            :padding="0"
            :height="graphHeight"
            :width="distanceUnit * graphLength"
            :radius="100"
            :max="graphData[0] + amplitude"
            :min="graphData[0] - amplitude"
            smooth>
          </trend>
        </div>
      </div>
      <div class="item"><img :src="getImgUrl(itemImg)" :class="{spin: timeIndex > 0}"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBody',
  props: ['graph', 'graphLength', 'timeIndex', 'itemImg'],
  data () {
    return {
      graphData: this.graph,
      graphHeight: 800,
      intervalID: 0,
      distanceUnit: 30
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/' + img)
    }
  },
  computed: {
    amplitude () {
      return Math.max(Math.abs(this.graphData[0] - Math.max.apply(null, this.graphData)), Math.abs(this.graphData[0] - Math.min.apply(null, this.graphData))) + 10
    }
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

    -webkit-transition: transform 0.5s linear;
    -moz-transition: transform 0.5s ease;
    -ms-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s linear;
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
    -webkit-transition: transform 0.5s linear;
    -moz-transition: transform 0.5s ease;
    -ms-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s linear;
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
    top: 10%;
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

</style>
