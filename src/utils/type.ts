export interface IPresaleData {
  currentStage: number;
  endTime: number;
  startTime: number;
  currentPrice: number;
  totalUSDRaised: number;
  totalTokensSold: number;
}

export interface IData {
  ethPrice: number;
  bnbPrice: number;
  currentPrice: number;
  minAmt: number;
}

export interface ICountDown {
  endTime: number;
}

export interface CoinData {
  name: string;
  symbol: string;
}
