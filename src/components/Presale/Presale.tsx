import { useEffect, useState, useRef } from "react";

import { useAccount } from "wagmi";
import { Address } from "viem";

import Countdown from "./Countdown";
import BuySection from "./BuySection";
// import TimeLeftPanel from "./TimeLeftPanel";

import * as translation from "@/translation/en.json";

import { IPresaleData } from "../../utils/type";
import { getPresaleData, getTMMBalance } from "../../web3/hooks/useAPI";

import "./Presale.css";
import PurchasedModal from "../modal/purchasedModal";

const Presale = () => {
  const { address } = useAccount();

  const [selectedNetwork, setSelectedNetwork] = useState("ETH");
  const [data, setData] = useState<IPresaleData>();
  const [purchasedBalance, setPurchasedBalance] = useState<number>(0);

  const [purchasedOpen, setPurchasedOpen] = useState(false);
  const handlePurchasedOpen = () => setPurchasedOpen(!purchasedOpen);

  const addressRef = useRef(address);

  useEffect(() => {
    addressRef.current = address;
  }, [address]);

  useEffect(() => {
    const getData = async () => {
      const _Data: IPresaleData = await getPresaleData();
      setData(_Data);

      if (addressRef.current) {
        const _balance = await getTMMBalance(addressRef.current as Address);
        setPurchasedBalance(_balance.tmmBalance ?? 0);
      } else {
        setPurchasedBalance(0);
      }
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number: string) => {
    return number.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  };

  const calcStageTarget = (stage: number) => {
    let startPrice = 0.0006,
      totalPrice = 0;
    for (let i = 0; i <= stage; i++) {
      totalPrice += startPrice;
      startPrice += 0.00002;
    }
    return Number(totalPrice * 500000000).toFixed(0);
  };

  return (
    <div
      className="text-white min-w-[calc(100%-20px)] md:min-w-[400px] relative px-[15px] py-[35px] border-[1px] border-white rounded-lg uppercase"
      style={{
        background:
          "linear-gradient(203.26deg, rgba(189, 0, 255, 0.2) 36.33%, rgba(44, 128, 83, 0.2) 59.91%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      {data && (
        <>
          <div className="flex flex-col gap-4 items-center">
            {/* <>
              <p className="text-2xl animate-blinker">
                {translation.presale.comingsoon}
              </p>
              <TimeLeftPanel />
              <p className="bg-white rounded-3xl text-black text-lg px-6 py-2 w-full md:w-4/5 h-12 text-center">
                $0 {translation.presale.raised}
              </p>
              <div className="flex text-sm">
                {translation.presale.purchased} {translation.presale.tmm} = 0
                <img
                  src="/assets/icons/info-icon.svg"
                  className="ml-2 cursor-pointer"
                  onClick={handlePurchasedOpen}
                />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="min-w-[90px] border-[1px] border-white h-0"></div>
                <p className="text-xs !w-full text-center">
                  1 {translation.presale.tmm} = $0.000
                </p>
                <div className="min-w-[90px] border-[1px] border-white h-0"></div>
              </div>
              <BuySection
                disabled={true}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </> */}

            {Math.floor(Date.now() / 1000) < Number(data?.startTime) && (
              <>
                <p className="text-lg">{translation.presale.startsin}</p>
                <Countdown
                  endTime={data?.startTime ? data.startTime : Date.now()}
                />
                <p>{translation.presale.untilPriceIncrease}</p>
                <p className="bg-white rounded-[30px] text-black text-center text-lg px-6 py-[10px] h-12 w-full">
                  $0 {translation.presale.raised}
                </p>
                <div className="flex text-sm">
                  {translation.presale.purchased} {translation.presale.tmm} = 0
                  <img
                    src="/assets/icons/info-icon.svg"
                    className="ml-2 cursor-pointer"
                    onClick={handlePurchasedOpen}
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="min-w-[90px] border-[1px] border-white h-0"></div>
                  <p className="text-xs md:text-base !w-full text-center">
                    1 {translation.presale.tmm} = $0.0006
                  </p>
                  <div className="min-w-[90px] border-[1px] border-white h-0"></div>
                </div>
                <BuySection
                  disabled={true}
                  selectedNetwork={selectedNetwork}
                  setSelectedNetwork={setSelectedNetwork}
                />
              </>
            )}

            {Math.floor(Date.now() / 1000) >= Number(data?.startTime) &&
              Math.floor(Date.now() / 1000) < Number(data?.endTime) && (
                <>
                  <p className="text-2xl">{translation.presale.buyTokens}</p>
                  <p className="text-lg">{translation.presale.nextIncrease}</p>
                  <Countdown
                    endTime={data?.endTime ? data.endTime : Date.now()}
                  />
                  {/* <p>{translation.presale.untilPriceIncrease}</p> */}
                  <div className="bg-white rounded-[30px] text-black text-lg px-6 py-[10px] relative w-full h-12 overflow-hidden">
                    <p
                      className="h-12 bg-[#FFC700] absolute left-0 top-0 rounded-[30px]"
                      style={{
                        width: `${
                          (Number(data?.totalUSDRaised) /
                            10 ** 18 /
                            Number(
                              calcStageTarget(Number(data?.currentStage))
                            )) *
                          100
                        }%`,
                      }}
                    ></p>
                    <p className="z-[10] absolute left-0 top-[10px] w-full text-center">
                      $
                      {Number(
                        (Number(data?.totalUSDRaised) / 10 ** 18).toFixed(2)
                      ).toLocaleString("en-US")}{" "}
                      {translation.presale.raised}
                    </p>
                  </div>
                  <div className="flex text-sm">
                    {translation.presale.purchased} {translation.presale.tmm} ={" "}
                    {formatNumber(
                      (Number(purchasedBalance) / 10 ** 18).toFixed(0)
                    )}
                    <img
                      src="/assets/icons/info-icon.svg"
                      className="ml-2 cursor-pointer"
                      onClick={handlePurchasedOpen}
                    />
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="min-w-[90px] border-[1px] border-white h-0"></div>
                    <p className="text-xs md:text-base !w-full text-center">
                      1 {translation.presale.tmm} = $
                      {Number(data?.currentPrice) / 10 ** 18}
                    </p>
                    <div className="min-w-[90px] border-[1px] border-white h-0"></div>
                  </div>
                  <BuySection
                    disabled={false}
                    selectedNetwork={selectedNetwork}
                    setSelectedNetwork={setSelectedNetwork}
                  />
                </>
              )}

            {Math.floor(Date.now() / 1000) >= Number(data?.endTime) && (
              <>
                <p className="text-lg">{translation.presale.endat}</p>
                <Countdown
                  endTime={data?.endTime ? data.endTime : Date.now()}
                />
              </>
            )}
          </div>
        </>
      )}
      <PurchasedModal
        purchasedOpen={purchasedOpen}
        handlePurchasedOpen={handlePurchasedOpen}
      />
    </div>
  );
};

export default Presale;
