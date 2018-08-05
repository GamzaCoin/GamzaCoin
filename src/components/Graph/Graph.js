/* eslint-disable */
class Graph {
  constructor(levelData) {
    this.levelData = levelData;
    this.maximumChange = levelData.maximumChange;
    this.startPrice = levelData.startPrice;
    this.frame = new Frame(levelData.graphLength, levelData.numberOfFramePoints, levelData.frameDifficultyRange, levelData.frameStartDirection);
    this.noise = [];
    for (let i = 0; i < levelData.numberOfFramePoints - 1; i++)
      this.noise.push(new Noise(levelData.noiseLength, this.frame.framePoint[i + 1].x - this.frame.framePoint[i].x - 1, levelData.noiseStrength, levelData.noiseScoreRange));

    this.graphLength = levelData.graphLength;
    this.max_height = 1;
  }

  getDifficulty() {
    return 0;
  }

  getGraph() {
    let graph = [];
    for(let i = 0; i < this.noise.length; i++) {
      let noise = this.noise[i].noise.slice();
      for(let n = 0; n < noise.length; n++)
        noise[n] += getPointOnTheLine(this.frame.framePoint[i], this.frame.framePoint[i + 1], this.frame.framePoint[i].x + n + 1);

      graph.push(this.frame.framePoint[i].y);
      graph = graph.concat(noise);
    }
    graph.push(this.frame.framePoint[this.noise.length].y);

    return graph.map((v) => {
      return Math.round(Math.round(v * 1000) / 1000 * this.maximumChange + this.startPrice);
    });
  }
}

class Frame {
  constructor(graphLength, numberOfPoints, difficultyRange, frameStartDirection) {
    this.numberOfPoints = numberOfPoints;
    this.frameLength = graphLength;
    this.difficultyRange = difficultyRange;
    this.startDirection = frameStartDirection || this.initStartDirection();
    this.framePoint = Array.from({length: numberOfPoints}, () => ({x: 0, y: 0}));
    this.difficulty = 0;

    this.buildFramePoint();
  }

  initStartDirection() {
    return Math.floor(Math.random() * 2) - 1 || 1;
  }

  buildFramePoint() {
    this.initFramePointX();
    this.initFramePointY();
  }

  initFramePointX() {
    let unit = Math.floor(this.frameLength / (this.numberOfPoints - 1));
    for(let i = 1; i < this.numberOfPoints - 1; i++) {
      this.framePoint[i].x = unit * i + Math.floor((Math.random() - 0.5) * unit / 2.5);
    }
    this.framePoint[this.numberOfPoints - 1].x = this.frameLength;
  }

  initFramePointY() {
    let tempHeight = new Array(this.numberOfPoints).fill(0);
    let difficulty;

    do {
      difficulty = 0;
      for (let i = 1; i < this.numberOfPoints; i++) {
        tempHeight[i] = this.startDirection * Math.pow(-1, i + 1) * Math.round(Math.random() * 100) / 100;
        difficulty += (this.framePoint[i].x - this.framePoint[i - 1].x) * (tempHeight[i] - tempHeight[i - 1]);
      }
    } while(difficulty < this.difficultyRange[0] || this.difficultyRange[1] < difficulty);

    for(let i in tempHeight)
      this.framePoint[i].y = tempHeight[i];
    this.difficulty = difficulty;
  }
}

class Noise {
  constructor(noiseLength, numberOfNoisePoint, strength, scoreRange) {
    // 낮은 값이 높은 density
    this.noiseLength = noiseLength;
    this.numberOfNoisePoint = numberOfNoisePoint;
    this.strength = strength;
    this.scoreRange = scoreRange;
    this.noise = [];

    this.makeNoise()
  }

  makeNoise() {
    let noise = new Array(this.numberOfNoisePoint);
    let i;
    let bestScore = 0;
    do {
      for(i = this.noiseLength - 1; i < this.numberOfNoisePoint; i += this.noiseLength) {
        noise[i] = Math.round((Math.random() * 2 - 1) * this.strength * 1000) / 1000;
        for(let j = i - this.noiseLength + 1; j < i; j++)
          noise[j] = getPointOnTheLine(i - this.noiseLength < 0 ? {x: -1, y: 0} : {x: i - this.noiseLength, y: noise[i - this.noiseLength]}, {x: i, y: noise[i]}, j);
      }
      for(let j = i - this.noiseLength + 1; j < this.numberOfNoisePoint; j++)
        noise[j] = getPointOnTheLine(i - this.noiseLength < 0 ? {x: -1, y: 0} : {x: i - this.noiseLength, y: noise[i - this.noiseLength]}, {x: i, y: 0}, j);

      bestScore = this.getBestScore(noise);

    } while(this.scoreRange[0] > bestScore || bestScore > this.scoreRange[1]);

    this.noise = noise;
    console.log(bestScore, noise);
  }

  getBestScore(n) {
    let score = 0;
    let preNoise = 0;
    let noise = n || this.noise;
    for(let i in noise) {
      score += preNoise < noise[i] ? noise[i] - preNoise : 0;
      preNoise = noise[i];
    }
    score += preNoise < 0 ? 0 - preNoise : 0;

    return score;
  }
}

function getPointOnTheLine(startPoint, endPoint, x) {
  return Math.round(((endPoint.y - startPoint.y) / (endPoint.x - startPoint.x) * (x - startPoint.x) + startPoint.y) * 1000) /1000;
}
