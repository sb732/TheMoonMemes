import { useEffect, useState, useRef } from "react";

import { useAccount } from "wagmi";
import { Address } from "viem";

import { Dialog } from "@material-tailwind/react";

import Countdown from "./Countdown";
import BuySection from "./BuySection";
// import TimeLeftPanel from "./TimeLeftPanel";

import * as translation from "@/translation/en.json";

import { IPresaleData } from "../../utils/type";
import { getPresaleData, getTMMBalance } from "../../web3/hooks/useAPI";

import "./Presale.css";

const Presale = () => {
  const { address } = useAccount();

  const [selectedNetwork, setSelectedNetwork] = useState("ETH");
  const [data, setData] = useState<IPresaleData>();
  const [balance, setBalance] = useState<number>(0);

  const [purchasedOpen, setPurchasedOpen] = useState(false);
  const [stakableOpen, setStakableOpen] = useState(false);
  const handlePurchasedOpen = () => setPurchasedOpen(!purchasedOpen);
  const handleStakableOpen = () => setStakableOpen(!stakableOpen);

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
        setBalance(_balance.tmmBalance ?? 0);
      } else {
        setBalance(0);
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
              <p className="bg-white rounded-lg text-black text-xs px-6 py-1">
                {translation.presale.untilPriceIncrease}
              </p>
              <div className="flex text-sm">
                {translation.presale.purchased} {translation.presale.tmm} = 0
                <img
                  src="/assets/icons/info-icon.svg"
                  className="ml-2 cursor-pointer"
                  onClick={handlePurchasedOpen}
                />
              </div>
              <p className="flex text-sm">
                {translation.presale.stakeable} {translation.presale.tmm} = 0{" "}
                <img
                  src="/assets/icons/info-icon.svg"
                  className="ml-2 cursor-pointer"
                  onClick={handleStakableOpen}
                />
              </p>
              <div className="w-full flex items-center justify-between">
                <div className="min-w-[100px] border-[1px] border-white h-0"></div>
                <p className="text-xs !w-full text-center">
                  1 {translation.presale.tmm} = $0.000
                </p>
                <div className="min-w-[100px] border-[1px] border-white h-0"></div>
              </div>
              <BuySection
                disabled={true}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </> */}

            {Math.floor(Date.now() / 1000) < Number(data?.startTime) && (
              <>
                <p>{translation.presale.startsin}</p>
                <Countdown
                  endTime={data?.startTime ? data.startTime : Date.now()}
                />
                <p className="bg-white rounded-lg text-black text-xs px-6 py-1">
                  {translation.presale.untilPriceIncrease}
                </p>
                <div className="flex text-sm">
                  {translation.presale.purchased} {translation.presale.tmm} = 0
                  <img
                    src="/assets/icons/info-icon.svg"
                    className="ml-2 cursor-pointer"
                    onClick={handlePurchasedOpen}
                  />
                </div>
                <p className="flex text-sm">
                  {translation.presale.stakeable} {translation.presale.tmm} = 0{" "}
                  <img
                    src="/assets/icons/info-icon.svg"
                    className="ml-2 cursor-pointer"
                    onClick={handleStakableOpen}
                  />
                </p>
                <div className="w-full flex items-center justify-between">
                  <div className="min-w-[100px] border-[1px] border-white h-0"></div>
                  <p className="text-xs !w-full text-center">
                    1 {translation.presale.tmm} = $0.000
                  </p>
                  <div className="min-w-[100px] border-[1px] border-white h-0"></div>
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
                  <p>{translation.presale.nextIncrease}</p>
                  <Countdown
                    endTime={data?.endTime ? data.endTime : Date.now()}
                  />
                  <p className="text-sm">
                    {translation.presale.usdtraised} $
                    {Number(
                      (Number(data?.totalUSDRaised) / 10 ** 18).toFixed(2)
                    ).toLocaleString("en-US")}{" "}
                    / $13,350,000
                  </p>
                  <div className="bg-white rounded-lg text-black text-xs px-6 py-1 relative w-full md:w-4/5 h-6">
                    <p
                      className="h-6 bg-[#52BF85] absolute left-0 top-0 rounded-lg"
                      style={{
                        width: `${
                          Number(data?.totalUSDRaised) / 10 ** 18 / 133500
                        }%`,
                      }}
                    ></p>
                    <p className="z-[10] absolute w-full text-center left-0">
                      {translation.presale.untilPriceIncrease}
                    </p>
                  </div>
                  <div className="flex text-sm">
                    {translation.presale.purchased} {translation.presale.tmm} ={" "}
                    {formatNumber((Number(balance) / 10 ** 18).toFixed(0))}
                    <img
                      src="/assets/icons/info-icon.svg"
                      className="ml-2 cursor-pointer"
                      onClick={handlePurchasedOpen}
                    />
                  </div>
                  <p className="flex text-sm">
                    {translation.presale.stakeable} {translation.presale.tmm} =
                    0
                    <img
                      src="/assets/icons/info-icon.svg"
                      className="ml-2 cursor-pointer"
                      onClick={handleStakableOpen}
                    />
                  </p>
                  <div className="w-full flex items-center justify-between">
                    <div className="min-w-[100px] border-[1px] border-white h-0"></div>
                    <p className="text-xs !w-full text-center">
                      1 {translation.presale.tmm} = $
                      {Number(data?.currentPrice) / 10 ** 18}
                    </p>
                    <div className="min-w-[100px] border-[1px] border-white h-0"></div>
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
                <p>{translation.presale.endat}</p>
                <Countdown
                  endTime={data?.endTime ? data.endTime : Date.now()}
                />
              </>
            )}
          </div>
        </>
      )}
      <Dialog
        open={purchasedOpen}
        handler={handlePurchasedOpen}
        size="xs"
        className="bg-black px-10 py-5 flex flex-col gap-5 items-center font-[Knewave] text-white rounded-3xl"
      >
        <p className="text-6xl bg-[#F0C010] w-24 h-24 text-center rounded-full flex flex-col items-center justify-center">
          !
        </p>
        <p className="leading-8 text-center">
          {translation.presale.dialog.purchased}
        </p>
        <span
          onClick={handlePurchasedOpen}
          className="bg-green-600 px-10 py-2 rounded-full cursor-pointer"
        >
          {translation.presale.dialog.ok}
        </span>
      </Dialog>
      <Dialog
        open={stakableOpen}
        handler={handleStakableOpen}
        size="xs"
        className="bg-black px-10 py-5 flex flex-col gap-5 items-center font-[Knewave] text-white rounded-3xl"
      >
        <p className="text-6xl bg-[#F0C010] w-24 h-24 text-center rounded-full flex flex-col items-center justify-center">
          !
        </p>
        <p className="leading-8 text-center">
          {translation.presale.dialog.stakeable}
        </p>
        <span
          onClick={handleStakableOpen}
          className="bg-green-600 px-10 py-2 rounded-full cursor-pointer"
        >
          {translation.presale.dialog.ok}
        </span>
      </Dialog>
    </div>
  );
};

export default Presale;
