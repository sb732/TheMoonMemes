import { useEffect, useState, useRef } from "react";

import { useAccount, useBalance } from "wagmi";
import { switchChain } from "@wagmi/core";
import { mainnet, bsc } from "@wagmi/core/chains";
import { Address } from "viem";

import { Dialog } from "@material-tailwind/react";

import { ToastContainer, toast } from "react-toastify";

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

import "./ReactToastify.css";

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
  const [flag, setFlag] = useState(true);

  const selectedCoinRef = useRef(selectedCoin);
  const inputAmountRef = useRef(inputAmount);
  const flagRef = useRef(flag);

  const [slippageOpen, setSlippageOpen] = useState(false);
  const handleSlippageOpen = () => setSlippageOpen(!slippageOpen);

  const notify = (message: string) => toast(message);

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
    flagRef.current = flag;
  }, [flag]);

  useEffect(() => {
    const getData = async () => {
      if (flagRef.current) {
        const _data: IData = await getCalcBoardData(address as Address);
        setData(_data);
        handleChange(inputAmountRef.current, _data, false);
      }
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chainId === 1 && selectedCoin.name !== "USDT") {
      setSelectedCoin(coins[0]);
      if (selectedNetwork === "BNB") setSelectedNetwork("ETH");
    } else if (chainId === 56 && selectedCoin.name !== "USDT") {
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
        const res = await switchChain(config, { chainId: bsc.id });
        if (res) setSelectedNetwork("BNB");
      } else {
        setSelectedNetwork("BNB");
      }
    } else if (selectedNetwork === "BNB") {
      if (address) {
        const res = await switchChain(config, { chainId: mainnet.id });
        if (res) setSelectedNetwork("ETH");
      } else {
        setSelectedNetwork("ETH");
      }
    }
  };

  interface resProp {
    res: boolean;
    reason?: string;
    hash?: string;
  }

  const buyTMM = async () => {
    setFlag(false);
    let res: resProp = { res: false };
    if (selectedCoin === coins[0]) {
      res = await buyWithETH(
        inputAmount.toString(),
        Number(outputAmount),
        connector
      );
    } else if (selectedCoin === coins[1]) {
      res = await buyWithBNB(
        inputAmount.toString(),
        Number(outputAmount),
        connector
      );
    } else {
      res = await buyWithUSDT(
        inputAmount.toString(),
        Number(outputAmount),
        address as Address,
        connector,
        selectedNetwork
      );
    }
    if (res.res && res.hash) {
      const result = await parseHash(res.hash, selectedNetwork);
      if (result) {
        notify("Purchased successfully!");
      } else {
        notify("Purchase failed, Slippage exceeded, Try again later!");
      }
    } else if (!res.res && res.reason == "metamask rejected")
      notify("User rejected wallet connection!");
    else if (!res.res && res.reason == "slippage error")
      notify("Purchase failed, Slippage exceeded, Try again later!");

    setFlag(true);
  };

  const parseHash = async (hash: string, network: string) => {
    await new Promise((r) => setTimeout(r, 30000));

    const fetchString =
      network === "ETH"
        ? `https://api.etherscan.io/api?module=transaction&action=getstatus&txhash=${hash}&apikey=9SWQUMC632ZYB3TNSF6A67RCPG3VF3D6YJ`
        : `https://api.bscscan.com/api?module=transaction&action=getstatus&txhash=${hash}&apikey=22RBV2E92YSHYFJCUTJK8R2E5SDYK64QYD`;

    const res: any = await fetch(fetchString);
    const rrr = await res.json();
    if (rrr.result.isError === "0") {
      return true;
    } else {
      return false;
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
        {((ETHBalance < inputAmount && selectedCoin != coins[2]) ||
          (Number(data?.ethUsdtBalance) / 10 ** 6 < inputAmount &&
            selectedCoin == coins[2] &&
            selectedNetwork === "ETH") ||
          (Number(data?.bscUsdtBalance) / 10 ** 18 < inputAmount &&
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

      <div className="flex flex-col md:flex-row w-full justify-center gap-2 items-center h-full">
        {!address ? (
          <ConnectButton />
        ) : (
          <button
            className="bg-[#FFC700] rounded-md text-black text-sm w-[280px] md:w-auto md:min-w-[150px] h-[40px] disabled:bg-[#FFC70055] disabled:cursor-not-allowed uppercase"
            onClick={() => buyTMM()}
            disabled={
              disabled ||
              inputUSDAmount < Number(data?.minAmt) / 10 ** 18 ||
              (ETHBalance < inputAmount && selectedCoin != coins[2]) ||
              (Number(data?.ethUsdtBalance) / 10 ** 6 < inputAmount &&
                selectedCoin == coins[2] &&
                selectedNetwork === "ETH") ||
              (Number(data?.bscUsdtBalance) / 10 ** 18 < inputAmount &&
                selectedCoin == coins[2] &&
                selectedNetwork === "BNB")
            }
          >
            {translation.presale.buysection.buynow}
          </button>
        )}
        <div className="group relative">
          <button className="relative w-[280px] md:w-auto md:min-w-[150px] h-[40px] border-[1px] rounded-md flex justify-center items-center gap-1 uppercase text-sm disabled:bg-[#52BF8555] disabled:cursor-not-allowed border-[#F0C010]">
            {selectedNetwork === "ETH" ? (
              <img
                src={`/assets/images/coins/ethereum.png`}
                className="w-6 h-6 mr-1"
                alt=""
              />
            ) : (
              <img
                src={`/assets/images/coins/bnb 2.png`}
                className="w-6 h-6 mr-1"
                alt=""
              />
            )}
            {selectedNetwork === "ETH"
              ? translation.presale.buysection.buywitheth
              : translation.presale.buysection.buywithbnb}
          </button>
          <div
            className="bg-black absolute top-[-50px] right-[0px] hidden group-hover:flex justify-center items-center min-w-[170px] h-[50px] rounded-xs cursor-pointer hover:bg-[#A9B9DB]"
            onClick={() => changeNetwork()}
          >
            {selectedNetwork !== "ETH" ? (
              <img
                src={`/assets/images/coins/ethereum.png`}
                className="w-6 h-6 mr-1"
                alt=""
              />
            ) : (
              <img
                src={`/assets/images/coins/bnb 2.png`}
                className="w-6 h-6 mr-1"
                alt=""
              />
            )}
            {selectedNetwork !== "ETH"
              ? translation.presale.buysection.buywitheth
              : translation.presale.buysection.buywithbnb}
          </div>
        </div>
      </div>

      <div className="flex text-sm">
        Slippage: 5%
        <img
          src="/assets/icons/info-icon.svg"
          className="ml-2 cursor-pointer"
          onClick={handleSlippageOpen}
        />
      </div>

      <Dialog
        open={slippageOpen}
        handler={handleSlippageOpen}
        size="xs"
        className="bg-black px-10 py-5 flex flex-col gap-5 items-center font-[Knewave] text-white rounded-3xl"
      >
        <p className="text-6xl bg-[#F0C010] w-24 h-24 text-center rounded-full flex flex-col items-center justify-center">
          !
        </p>
        <p className="leading-8 text-xl text-center">
          {translation.presale.dialog.slippage1}
        </p>
        <p className="leading-8 text-center">
          {translation.presale.dialog.slippage2}
        </p>
        <span
          onClick={handleSlippageOpen}
          className="bg-green-600 px-10 py-2 rounded-full cursor-pointer"
        >
          {translation.presale.dialog.ok}
        </span>
      </Dialog>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default BuySection;
