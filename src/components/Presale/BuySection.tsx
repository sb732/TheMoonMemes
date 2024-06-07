import { useEffect, useState } from "react";

import { useAccount } from "wagmi";
import { switchChain } from "@wagmi/core";
import { sepolia, bscTestnet } from "@wagmi/core/chains";

import { config } from "@/provider/config";

import ConnectButton from "@/provider/ConnectButton";

import CoinButtons from "./CoinButtons";

import { CoinData, IData } from "../../utils/type";

import {
  getCalcBoardData,
  buyWithETH,
  buyWithBNB,
  // buyWithUSDT,
} from "../../web3/hooks/useAPI";

const coins: CoinData[] = [
  {
    name: "ETH",
    symbol: "ethereum.png",
  },
  {
    name: "BNB",
    symbol: "bnb 2.png",
  },
  {
    name: "USDT",
    symbol: "usdt.png",
  },
];

const BuySection = ({ disabled }: { disabled: boolean }) => {
  const { chainId, connector, address } = useAccount();

  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [data, setData] = useState<IData>();
  const [inputAmount, setInputAmt] = useState(0);
  const [inputUSDAmount, setInputUSDAmount] = useState(0);
  const [outputAmount, setOutputAmt] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const _data: IData = await getCalcBoardData();
      setData(_data);

      handleChange(inputAmount);
    };

    getData();
  }, []);

  useEffect(() => {
    if (chainId === 11155111 && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[0]);
    } else if (chainId === 97 && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[1]);
    }
  }, [chainId]);

  const handleChange = (value: any) => {
    setInputAmt(value);

    // Get prices
    const ethPrice = Number(data?.ethPrice) / 10 ** 18;
    const bnbPrice = Number(data?.bnbPrice) / 10 ** 18;
    const curPrice = Number(data?.currentPrice) / 10 ** 18;

    let usdtAmt = 0;
    if (selectedCoin === coins[0]) {
      usdtAmt = ethPrice * value;
    } else if (selectedCoin === coins[1]) {
      usdtAmt = bnbPrice * value;
    } else {
      usdtAmt = Number(value);
    }
    usdtAmt = usdtAmt ? usdtAmt : 0;

    let output = 0;
    output = Math.floor(Number(usdtAmt) / curPrice);

    setInputUSDAmount(usdtAmt);
    setOutputAmt(output);
  };

  useEffect(() => {
    handleChange(inputAmount);
  }, [selectedCoin]);

  const changeNetwork = async () => {
    if (chainId === 11155111) {
      await switchChain(config, { chainId: bscTestnet.id });
    } else if (chainId === 97) {
      await switchChain(config, { chainId: sepolia.id });
    }
  };

  const buyTMM = async () => {
    if (selectedCoin === coins[0]) {
      const res = await buyWithETH(
        inputAmount.toString(),
        Number((Number(outputAmount) - Number(outputAmount) * 0.05).toFixed(0))
      );
      console.log(res);
    } else if (selectedCoin === coins[1]) {
      const res = await buyWithBNB(
        inputAmount.toString(),
        Number((Number(outputAmount) - Number(outputAmount) * 0.05).toFixed(0)),
        connector
      );
      console.log(res);
    } else {
      // const res = await buyWithUSDT(inputAmount.toString(), Number(realAmount));
      // console.log(res);
    }
  };

  return (
    <>
      <div className="flex gap-1 md:gap-2">
        {chainId === 11155111 && (
          <CoinButtons
            coin={coins[0]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        )}
        {chainId === 97 && (
          <CoinButtons
            coin={coins[1]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        )}
        <CoinButtons
          coin={coins[2]}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div>
          <p className="text-xs text-left">{selectedCoin.name} you pay</p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              type="number"
              className="bg-transparent w-full md:w-[120px] p-2 focus:border-none focus:shadow-none focus:outline-none"
              onChange={(e) => handleChange(e.target.value)}
              value={inputAmount}
            />
            <img
              src={`/assets/images/coins/${selectedCoin.symbol}`}
              className="w-6 h-6 mr-2"
              alt="usdt"
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-left">$TMM you receive</p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              type="number"
              className="bg-transparent w-full md:w-[120px] p-2"
              value={disabled ? "0" : outputAmount}
              disabled
            />
            <img
              src="/assets/images/coins/tmm.png"
              className="w-6 h-6 mr-2"
              alt="tmm token"
            />
          </div>
        </div>
      </div>

      <div className="text-[10px]">
        <p className="text-center">
          {inputAmount} {selectedCoin.name} &#8776; ${inputUSDAmount}
        </p>
        {!disabled && (
          <div className="flex gap-3">
            {inputUSDAmount < Number(data?.minAmt) / 10 ** 18 && (
              <p>Minimum USD Amount: {Number(data?.minAmt) / 10 ** 18}</p>
            )}
          </div>
        )}
      </div>

      <div className="flex w-full justify-center gap-2 items-center h-full">
        {!address ? (
          <ConnectButton />
        ) : (
          <button
            className="bg-[#52BF85] rounded-md text-black text-sm min-w-[120px] h-[35px] disabled:bg-[#52BF8555] disabled:cursor-not-allowed uppercase"
            onClick={() => buyTMM()}
            disabled={disabled}
          >
            Buy Now
          </button>
        )}
        <button
          className={`rounded-md text-black text-sm min-w-[120px] h-[35px] disabled:bg-[#52BF8555] disabled:cursor-not-allowed uppercase ${
            chainId === 11155111 ? "bg-[#F0C010]" : "bg-[#A9B9DB]"
          }`}
          onClick={() => changeNetwork()}
          disabled={disabled}
        >
          {chainId === 11155111 ? "Buy With BNB" : "Buy With ETH"}
        </button>
      </div>
    </>
  );
};

export default BuySection;
