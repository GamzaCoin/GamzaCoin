import Graph from '../Graph/Graph'
import {levelData} from '../../game-config/levelData'

/* eslint-disable */
export default class Game {
  constructor(level) {
    this.level = level;
    this.goal = levelData[level - 1].goal;
    this.goalDesc = levelData[level - 1].goalDesc;
    this.money = levelData[level - 1].startMoney;
    this.numberOfItem = 0;
    this.timeIndex = 0;
    this.timeUnit = 500;
    this.interval = null;
    this.graph = new Graph(levelData[level - 1].GraphData);
    this.history = [];
    this.gameStatus = 'ready';
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
    if(this.gameStatus !== 'play')
      return;
    if(!this.numberOfItem)
      return;
    let price = this.graph.graphData[this.timeIndex + 1] || this.graph.graphData[this.timeIndex];
    this.money = Math.round(this.numberOfItem * price);
    this.numberOfItem = 0;
    this.history.push({type: 'sell', timeIndex: this.timeIndex, price: price, numberOfItem: this.numberOfItem, money: this.money})
  }

  buy() {
    if(this.gameStatus !== 'play')
      return;
    if(!this.money)
      return;
    let price = this.graph.graphData[this.timeIndex + 1] || this.graph.graphData[this.timeIndex];
    this.numberOfItem = Math.round(this.money / price * 10) / 10;
    this.money = 0;
    this.history.push({type: 'buy', timeIndex: this.timeIndex, price: price, numberOfItem: this.numberOfItem, money: this.money})
  }

  startGame() {
    this.gameStatus = 'play';
    this.interval = setInterval(() => {
      if(this.timeIndex >= this.graph.graphLength) {
        this.gameOver();
        return;
      }
      this.timeIndex++;
    }, this.timeUnit);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  gameOver() {
    this.stopGame();
    this.showScoreBoard();
  }

  showScoreBoard() {
    this.gameStatus = 'gameover';
  }
}
