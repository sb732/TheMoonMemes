import { useEffect, useState, useRef } from "react";
import { useAccount, useBalance } from "wagmi";
import { switchChain } from "@wagmi/core";
import { sepolia, bscTestnet } from "@wagmi/core/chains";
import { Address } from "viem";

import { config } from "@/provider/config";
import ConnectButton from "@/provider/ConnectButton";
import CoinButtons from "./CoinButtons";
import { CoinData, IData } from "../../utils/type";
import {
  getCalcBoardData,
  buyWithETH,
  buyWithBNB,
  buyWithUSDT,
} from "../../web3/hooks/useAPI";

import * as translation from "@/translation/en.json";

const coins: CoinData[] = [
  {
    name: translation.presale.buysection.eth,
    symbol: "ethereum.png",
  },
  {
    name: translation.presale.buysection.bnb,
    symbol: "bnb 2.png",
  },
  {
    name: translation.presale.buysection.usdt,
    symbol: "usdt.png",
  },
];

interface BuySectionProps {
  disabled: boolean;
  selectedNetwork: string;
  setSelectedNetwork: (network: string) => void;
}

const BuySection = ({
  disabled,
  selectedNetwork,
  setSelectedNetwork,
}: BuySectionProps) => {
  const { chainId, connector, address } = useAccount();
  const balance = useBalance({ address });
  const ETHBalance = Number(balance.data?.value) / 10 ** 18;

  const [selectedCoin, setSelectedCoin] = useState(coins[0]);

  const [data, setData] = useState<IData>();
  const [inputAmount, setInputAmt] = useState(0);
  const [inputUSDAmount, setInputUSDAmount] = useState(0);
  const [outputAmount, setOutputAmt] = useState(0);

  const selectedCoinRef = useRef(selectedCoin);
  const inputAmountRef = useRef(inputAmount);

  const formatNumber = (number: string) => {
    return number.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  };

  useEffect(() => {
    selectedCoinRef.current = selectedCoin;
  }, [selectedCoin]);

  useEffect(() => {
    inputAmountRef.current = inputAmount;
  }, [inputAmount]);

  useEffect(() => {
    const getData = async () => {
      const _data: IData = await getCalcBoardData(address as Address);
      setData(_data);
      handleChange(inputAmountRef.current, _data, false);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chainId === 11155111 && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[0]);
      if (selectedNetwork === "BNB") setSelectedNetwork("ETH");
    } else if (chainId === 97 && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[1]);
      if (selectedNetwork === "ETH") setSelectedNetwork("BNB");
    }
  }, [chainId]);

  useEffect(() => {
    if (selectedNetwork === "ETH" && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[0]);
    } else if (selectedNetwork === "BNB" && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[1]);
    }
  }, [selectedNetwork]);

  const handleChange = (value: any, currentData = data, flag = true) => {
    if (flag) setInputAmt(value);

    // Get prices
    const ethPrice = Number(currentData?.ethPrice) / 10 ** 18;
    const bnbPrice = Number(currentData?.bnbPrice) / 10 ** 18;
    const curPrice = Number(currentData?.currentPrice) / 10 ** 18;

    let usdtAmt = 0;
    if (selectedCoinRef.current === coins[0]) {
      usdtAmt = ethPrice * value;
    } else if (selectedCoinRef.current === coins[1]) {
      usdtAmt = bnbPrice * value;
    } else {
      usdtAmt = Number(value);
    }
    usdtAmt = usdtAmt ? usdtAmt : 0;

    let output = 0;
    output = Math.floor(Number(usdtAmt) / curPrice);
    output = output ? output : 0;

    setInputUSDAmount(usdtAmt);
    setOutputAmt(output);
  };

  useEffect(() => {
    handleChange(inputAmount);
  }, [selectedCoin]);

  const changeNetwork = async () => {
    if (selectedNetwork === "ETH") {
      if (address) {
        const res = await switchChain(config, { chainId: bscTestnet.id });
        if (res) setSelectedNetwork("BNB");
      } else {
        setSelectedNetwork("BNB");
      }
    } else if (selectedNetwork === "BNB") {
      if (address) {
        const res = await switchChain(config, { chainId: sepolia.id });
        if (res) setSelectedNetwork("ETH");
      } else {
        setSelectedNetwork("ETH");
      }
    }
  };

  const buyTMM = async () => {
    if (selectedCoin === coins[0]) {
      const res = await buyWithETH(
        inputAmount.toString(),
        Number(outputAmount),
        connector
      );
      console.log(res);
    } else if (selectedCoin === coins[1]) {
      const res = await buyWithBNB(
        inputAmount.toString(),
        Number(outputAmount),
        connector
      );
      console.log(res);
    } else {
      const res = await buyWithUSDT(
        inputAmount.toString(),
        Number(outputAmount),
        address as Address,
        connector,
        selectedNetwork
      );
      console.log(res);
    }
  };

  return (
    <>
      <div className="flex gap-1 md:gap-2">
        {selectedNetwork === "ETH" && (
          <CoinButtons
            coin={coins[0]}
            selectedCoin={selectedCoin}
            setSelectedCoin={setSelectedCoin}
          />
        )}
        {selectedNetwork === "BNB" && (
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
          <p className="text-xs text-left">
            {selectedCoin.name} {translation.presale.buysection.youpay}
          </p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              type="number"
              className="bg-transparent w-[250px] md:w-[120px] p-2 focus:border-none focus:shadow-none focus:outline-none"
              onChange={(e) => handleChange(e.target.value)}
              value={inputAmount}
            />
            <img
              src={`/assets/images/coins/${selectedCoin.symbol}`}
              className="w-6 h-6 mr-2"
              alt={selectedCoin.name}
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-left">
            {translation.presale.tmm}{" "}
            {translation.presale.buysection.youreceive}
          </p>
          <div className="flex items-center border-[1px] border-white rounded-lg">
            <input
              className="bg-transparent w-[250px] md:w-[120px] p-2"
              value={disabled ? 0 : formatNumber(outputAmount.toString())}
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
        {((ETHBalance < inputAmount && selectedCoin != coins[2]) ||
          (Number(data?.ethUsdtBalance) < inputAmount &&
            selectedCoin == coins[2] &&
            selectedNetwork === "ETH") ||
          (Number(data?.bscUsdtBalance) < inputAmount &&
            selectedCoin == coins[2] &&
            selectedNetwork === "BNB")) && (
          <div className="flex gap-3">
            <p>{translation.presale.buysection.enoughbalance}</p>
          </div>
        )}
        {!disabled && (
          <div className="flex gap-3">
            {inputUSDAmount < Number(data?.minAmt) / 10 ** 18 && (
              <p>
                {translation.presale.buysection.minamount}{" "}
                {Number(data?.minAmt) / 10 ** 18}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex w-full justify-center gap-2 items-center h-full">
        {!address ? (
          <ConnectButton />
        ) : (
          <button
            className="bg-[#FFC700] rounded-md text-black text-sm min-w-[124px] sm:min-w-[150px] h-[32px] sm:h-[40px] disabled:bg-[#FFC70055] disabled:cursor-not-allowed uppercase"
            onClick={() => buyTMM()}
            disabled={
              disabled ||
              inputUSDAmount < Number(data?.minAmt) / 10 ** 18 ||
              (ETHBalance < inputAmount && selectedCoin != coins[2]) ||
              (Number(data?.ethUsdtBalance) < inputAmount &&
                selectedCoin == coins[2] &&
                selectedNetwork === "ETH") ||
              (Number(data?.bscUsdtBalance) < inputAmount &&
                selectedCoin == coins[2] &&
                selectedNetwork === "BNB")
            }
          >
            {translation.presale.buysection.buynow}
          </button>
        )}
        <button
          className={`rounded-md text-sm min-w-[124px] sm:min-w-[150px] h-[32px] sm:h-[40px] disabled:bg-[#52BF8555] disabled:cursor-not-allowed uppercase border-[1px] ${
            selectedNetwork === "ETH" ? "border-[#F0C010]" : "border-[#A9B9DB]"
          }`}
          onClick={() => changeNetwork()}
        >
          {selectedNetwork === "ETH"
            ? translation.presale.buysection.buywithbnb
            : translation.presale.buysection.buywitheth}
        </button>
      </div>
    </>
  );
};

export default BuySection;
