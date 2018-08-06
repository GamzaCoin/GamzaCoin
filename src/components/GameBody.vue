<template>
  <div class="game-body">
    <div class="graph-container">
      <div class="background"
           v-bind:style="{ width: `calc(100% + ${distanceUnit * (graphLength - 1) / 2 + 100}px)`, transform: `translate(${-1 * distanceUnit * timeIndex / 2}px, ${graphData[timeIndex] - 300}px)`}"></div>
      <div class="graph-wrapper">
        <div class="graph"
             v-bind:style="`transform: translate(${-1 * distanceUnit * timeIndex}px, ${(graphData[timeIndex] - 300) * 2}px)`">
          <trend
            v-bind:data="graphData"
            :gradient="['black']"
            :padding="0"
            :height="800"
            :width="distanceUnit * graphLength"
            :radius="100"
            smooth>
          </trend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBody',
  props: ['graph', 'graphLength', 'timeIndex'],
  data () {
    return {
      // sample1: [0, -0.021, -0.044, -0.024, -0.005, 0.026, 0.057, 0.132, 0.208, 0.143, 0.077, 0.159, 0.241, 0.166, 0.091, 0.129, 0.165, 0.241, 0.316, 0.273, 0.23, 0.265, 0.3, 0.26, 0.22, 0.236, 0.251, 0.146, 0.041, 0.018, -0.004, -0.019, -0.035, -0.035, -0.035, -0.15, -0.265, -0.226, -0.189, -0.304, -0.419, -0.362, -0.305, -0.36, -0.416, -0.476, -0.537, -0.573, -0.61, -0.632, -0.656, -0.71, -0.638, -0.566, -0.599, -0.631, -0.539, -0.447, -0.447, -0.446, -0.38, -0.315, -0.254, -0.195, -0.145, -0.096, -0.012, 0.071, 0.028, -0.015, 0.102, 0.217, 0.188, 0.161, 0.256, 0.352, 0.364, 0.377, 0.462, 0.548, 0.55],
      graphData: this.graph, // [300, 306, 312, 319, 326, 318, 309, 322, 334, 327, 321, 342, 363, 350, 338, 344, 351, 371, 391, 390, 388, 385, 383, 386, 389, 398, 407, 411, 414, 396, 378, 384, 391, 373, 356, 335, 314, 303, 291, 288, 284, 280, 275, 250, 225, 225, 225, 220, 215, 190, 164, 161, 158, 155, 153, 165, 178, 189, 199, 203, 207, 225, 243, 235, 226, 250, 273, 270, 267, 278, 289, 299, 310, 315, 319, 318, 316, 326, 336, 349, 362],
      intervalID: 0,
      x: 0,
      y: 0,
      distanceUnit: 15
    }
  },
  methods: {
  },
  mounted: function () {
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

  .show-aria {
    height: 100%;
    border: solid 1px black;
    position: relative;
    z-index: 900;
  }

  .graph-aria {
    position: relative;
    z-index: 1000;
  }

  .background {
    height: 200%;
    background-image: url('../assets/bgimage.png');
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    z-index: 100;
    top:-50%;

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

</style>
