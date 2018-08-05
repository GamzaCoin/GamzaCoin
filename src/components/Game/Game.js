import Graph from '../Graph/Graph'
import {level} from '../../game-config/levelData'

/* eslint-disable */
export default class Game {
  constructor(startMoney) {
    this.level = 1;
    this.money = startMoney;
    this.numberOfItem = 0;
    this.timeIndex = 0;
    this.timeUnit = 500;
    this.interval = null;
    this.graph = new Graph(level[this.level - 1].GraphData)
  }

  sellAt(price) {
    if(!this.numberOfItem)
      return;
    console.log(this.numberOfItem, price, this.numberOfItem * price);
    this.money = this.numberOfItem * price;
    this.numberOfItem = 0;
  }

  buyAt(price) {
    if(!this.money)
      return;
    console.log(this.numberOfItem, price, this.numberOfItem * price);

    this.numberOfItem = Math.round(this.money / price * 10) / 10;
    this.money = 0;
  }

  sell() {
    if(!this.numberOfItem)
      return;
    console.log(this.numberOfItem, this.graph, this.numberOfItem * this.graph.graphData[this.timeIndex]);
    this.money = Math.round(this.numberOfItem * this.graph.graphData[this.timeIndex + 1]);
    this.numberOfItem = 0;
  }

  buy() {
    if(!this.money)
      return;
    console.log(this.numberOfItem, this.graph.graphData[this.timeIndex], this.numberOfItem * this.graph.graphData[this.timeIndex]);

    this.numberOfItem = Math.round(this.money / this.graph.graphData[this.timeIndex + 1] * 10) / 10;
    this.money = 0;
  }

  startGame() {
    this.interval = setInterval(() => {
      if(this.timeIndex >= this.graph.graphLength) {
        this.stopGame();
        return;
      }
      this.timeIndex++;
    }, this.timeUnit);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
