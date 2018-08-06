/* eslint-disable */
export const levelData = [
  {
    level: 1,
    startMoney: 1000,
    GraphData: {
      startPrice: 300,
      maximumChange: 100,
      graphLength: 80,
      frameDifficultyRange: [16, 20],
      frameStartDirection: 1,
      numberOfFramePoints: 4,
      noiseLength: 1,
      noiseStrength: 0.2,
      noiseScoreRange: [1.0, 1.5],
    },
    itemName: '감자',
    itemImg: 'gamza.png',
    goalDesc: "감자를 팔아서, 1,300원을 만드세요!",
    goal: 1300,
  }, {
    level: 2,
    startMoney: 2000,
    GraphData: {
      startPrice: 300,
      maximumChange: 100,
      graphLength: 80,
      frameDifficultyRange: [14, 16],
      frameStartDirection: 1,
      numberOfFramePoints: 5,
      noiseLength: 1,
      noiseStrength: 0.15,
      noiseScoreRange: [0.8, 1.0],
    },
    itemName: '토마토',
    itemImg: 'tomato.png',
    goalDesc: "토마토를 팔아서, 1,500원을 만드세요!",
    goal: 3000,
  }, {
    level: 3,
    startMoney: 2000,
    GraphData: {
      startPrice: 400,
      maximumChange: 100,
      graphLength: 80,
      frameDifficultyRange: [14, 16],
      frameStartDirection: 1,
      numberOfFramePoints: 6,
      noiseLength: 1,
      noiseStrength: 0.15,
      noiseScoreRange: [0.8, 1.0],
    },
    itemName: '브로콜리',
    itemImg: 'brocoli.png',
    goalDesc: "브로콜리를 팔아서, 1,800원을 만드세요!",
    goal: 4000,
  },
];
