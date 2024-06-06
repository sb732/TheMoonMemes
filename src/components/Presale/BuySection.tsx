import { useEffect, useState } from "react";

import { useAccount } from "wagmi";

import CoinButtons from "./CoinButtons";

import { CoinData, IData } from "../../utils/type";

import { getCalcBoardData } from "../../web3/hooks/useAPI";

const coins: CoinData[] = [
  {
    name: "ETH",
    symbol: "ethereum.png",
  },
  {
    name: "USDT(ERC20)",
    symbol: "usdt.png",
  },
  {
    name: "USDC(ERC20)",
    symbol: "usdc.png",
  },
  {
    name: "BNB",
    symbol: "bnb 2.png",
  },
  {
    name: "USDT(BEP20)",
    symbol: "usdt.png",
  },
];

const BuySection = () => {
  const { chainId } = useAccount();

  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [selectedBonus, setSelectedBonus] = useState<number>(0);
  const [data, setData] = useState<IData>();
  const [bonusArr_, setBonusArray] = useState<any>();
  const [inputAmount, setInputAmt] = useState(0);
  const [, setInputUSDAmount] = useState(0);
  const [, setOutputAmt] = useState(0);
  const [, setRealAmount] = useState(0);
  const [, setBonusAmount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const _data: IData = await getCalcBoardData();
      setData(_data);

      const _bonusArr = [];
      if (_data?.bonusData) {
        for (let i = 0; i < _data.bonusData[0].length; i++) {
          const obj = {
            amount: _data.bonusData[0][i],
            rate: _data.bonusData[1][i],
          };
          _bonusArr.push(obj);
        }
      }

      setBonusArray(_bonusArr);

      handleChange(inputAmount);
    };

    getData();
  }, []);

  useEffect(() => {
    if (chainId === 1) {
      setSelectedCoin(coins[0]);
    } else if (chainId === 56) {
      setSelectedCoin(coins[3]);
    }
  }, [chainId]);

  const handleApplyBonus = (amt: number, rate: number) => {
    const ethPrice = Number(data?.ethPrice) / 10 ** 18;
    const bnbPrice = Number(data?.bnbPrice) / 10 ** 18;
    const curPrice = Number(data?.currentPrice) / 10 ** 18;

    let input = 0,
      output = 0,
      realAmt = 0,
      bonusAmt = 0;
    if (selectedCoin === coins[0]) {
      input = Math.round((amt / ethPrice + Number.EPSILON) * 10000) / 10000;
    } else if (selectedCoin === coins[3]) {
      input = Math.round((amt / bnbPrice + Number.EPSILON) * 10000) / 10000;
    } else {
      input = amt;
    }
    realAmt = Math.floor(amt / curPrice);
    bonusAmt = Math.floor((amt / curPrice) * (rate / 100));
    output = realAmt + bonusAmt;

    setInputAmt(input);
    setInputUSDAmount(amt);
    setOutputAmt(output);
    setRealAmount(realAmt);
    setBonusAmount(bonusAmt);
    setSelectedBonus(rate);
  };

  const handleChange = (value: any) => {
    setInputAmt(value);

    // Get prices
    const ethPrice = Number(data?.ethPrice) / 10 ** 18;
    const bnbPrice = Number(data?.bnbPrice) / 10 ** 18;
    const curPrice = Number(data?.currentPrice) / 10 ** 18;

    let bonusRate = 0;
    let usdtAmt;
    if (selectedCoin === coins[0]) {
      usdtAmt = ethPrice * value;
    } else if (selectedCoin === coins[3]) {
      usdtAmt = bnbPrice * value;
    } else {
      usdtAmt = Number(value);
    }

    if (bonusArr_) {
      for (let i = 0; i < bonusArr_.length; i++) {
        if (usdtAmt >= bonusArr_[i].amount)
          bonusRate = Number(bonusArr_[i].rate);
      }
    }

    let output = 0,
      realAmt = 0,
      bonusAmt = 0;
    realAmt = Math.floor(Number(usdtAmt) / curPrice);
    if (bonusRate !== 0)
      bonusAmt = Math.floor((Number(usdtAmt) / curPrice) * (bonusRate / 100));
    output = realAmt + bonusAmt;

    setInputUSDAmount(usdtAmt);
    setOutputAmt(output);
    setRealAmount(realAmt);
    setBonusAmount(bonusAmt);
    setSelectedBonus(bonusRate);
  };

  useEffect(() => {
    handleChange(inputAmount);
  }, [selectedCoin]);

  //   const buyTMM = async () => {
  //     const curPrice = Number(data?.currentPrice) / 10 ** 18;

  //     if (show.with === "ETH") {
  //       const res = await buyWithETH(
  //         inputAmount,
  //         Number((Number(realAmount) - Number(realAmount) * 0.05).toFixed(0)),
  //         curPrice,
  //         address as Address
  //       );
  //     } else {
  //       const res = await buyWithUSDT(
  //         inputAmount,
  //         Number(realAmount),
  //         address as Address,
  //         curPrice
  //       );
  //     }
  //   };

  return (
    <>
      {chainId === 1 && (
        <div className="flex gap-1">
          <CoinButtons
            coin={coins[0]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
          <CoinButtons
            coin={coins[1]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
          <CoinButtons
            coin={coins[2]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        </div>
      )}
      {chainId === 56 && (
        <div className="flex gap-1">
          <CoinButtons
            coin={coins[3]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
          <CoinButtons
            coin={coins[4]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        </div>
      )}

      <div className="w-full flex items-center gap-2">
        {bonusArr_ &&
          bonusArr_.length > 0 &&
          bonusArr_.map((ele: any, idx: any) => {
            return (
              <p
                key={idx}
                className={`text-white text-xs text-center py-1 px-1 rounded-md cursor-pointer border-white border-[1px] ${
                  Number(ele.rate) == selectedBonus ? "bg-green-600" : ""
                }`}
                onClick={() =>
                  handleApplyBonus(Number(ele.amount), Number(ele.rate))
                }
              >
                ${Number(ele.amount)} +{Number(ele.rate)}%
              </p>
            );
          })}
      </div>

      <div className="flex gap-2">
        <div>
          <p className="text-[8px] text-left">{selectedCoin.name} you pay</p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              type="number"
              className="bg-transparent w-[100px] p-1"
            //   onChange={(e) => handleChange(e.target.value)}
            //   value={inputAmount}
            />
            <img
              src={`/assets/images/coins/${selectedCoin.symbol}`}
              className="w-6 h-6"
              alt="usdt"
            />
          </div>
        </div>
        <div>
          <p className="text-[8px] text-left">$TMM you receive</p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              type="number"
              className="bg-transparent w-[100px] p-1"
            //   value={outputAmount}
              disabled
            />
            <img
              src="/assets/images/coins/tmm.png"
              className="w-6 h-6"
              alt="tmm token"
            />
          </div>
        </div>
      </div>

      {/* <div className="text-[10px] flex gap-5">
        {inputUSDAmount < Number(data?.minAmt) / 10 ** 18 ? (
          <p>Minimum USD Amount: {Number(data?.minAmt) / 10 ** 18}</p>
        ) : (
          <>
            <p>
              {inputAmount} {selectedCoin.name} is {realAmount} $TMM
            </p>
            <p>
              +{selectedBonus}% is {bonusAmount} $TMM
            </p>
          </>
        )}
      </div> */}

      <div className="flex w-full justify-center">
        <button className="bg-[#52BF85] rounded-md text-black text-sm min-w-[120px] h-[35px]">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default BuySection;
