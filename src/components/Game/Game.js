import Graph from '../Graph/Graph'
import {levelData} from '../../game-config/levelData'

/* eslint-disable */
export default class Game {
  constructor(level) {
    this.level = level;
    this.goal = levelData[level - 1].goal;
    this.goalDesc = levelData[level - 1].goalDesc;
    this.itemName = levelData[level - 1].itemName;
    this.itemImg = levelData[level - 1].itemImg;
    this.money = levelData[level - 1].startMoney;
    this.numberOfItem = 0;
    this.timeIndex = 0;
    this.timeUnit = 500;
    this.interval = null;
    this.graph = new Graph(levelData[level - 1].GraphData);
    this.history = [];
    this.gameStatus = 'ready';
    this.isClear = null;
    this.totalScore = 0;
    this.lock = false;
  }

  sellAt(price) {
    if(!this.numberOfItem)
      return;
    this.money = this.numberOfItem * price;
    this.numberOfItem = 0;
  }

  buyAt(price) {
    if(!this.money)
      return;

    this.numberOfItem = Math.round(this.money / price * 10) / 10;
    this.money = 0;
  }

  sell() {
    if(this.lock)
      return false;
    if(this.gameStatus !== 'play')
      return false;
    if(!this.numberOfItem)
      return false;
    let price = this.graph.graphData[this.timeIndex] || this.graph.graphData[this.timeIndex];
    this.money = Math.round(this.numberOfItem * price);
    this.numberOfItem = 0;
    this.history.push({type: 'sell', timeIndex: this.timeIndex, price: price, numberOfItem: this.numberOfItem, money: this.money})
    this.lock = true;
    setTimeout(() => {
      this.lock = false;
    }, 500);
    return true;
  }

  buy() {
    if(this.lock)
      return false;
    if(this.gameStatus !== 'play')
      return false;
    if(!this.money)
      return false;
    let price = this.graph.graphData[this.timeIndex] || this.graph.graphData[this.timeIndex];
    this.numberOfItem = Math.round(this.money / price * 10) / 10;
    this.money = 0;
    this.history.push({type: 'buy', timeIndex: this.timeIndex, price: price, numberOfItem: this.numberOfItem, money: this.money})
    this.lock = true;
    setTimeout(() => {
      this.lock = false;
    }, 500);
    return true;
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
    const currentPrice = this.graph.graphData[this.timeIndex + 1] || this.graph.graphData[this.timeIndex];
    const worth = Math.round(this.money + this.numberOfItem * currentPrice);
    this.isClear = worth >= this.goal;
    this.totalScore = worth;
    this.gameStatus = 'gameover';
  }
}
