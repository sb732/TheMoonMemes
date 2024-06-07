import { useEffect, useState } from "react";

import Countdown from "./Countdown";
import BuySection from "./BuySection";
import TimeLeftPanel from "./TimeLeftPanel";

import { IPresaleData } from "../../utils/type";
import { getPresaleData } from "../../web3/hooks/useAPI";

import "./Presale.css";

const Presale = () => {
  const [data, setData] = useState<IPresaleData>();

  useEffect(() => {
    const getData = async () => {
      const tmp: IPresaleData = await getPresaleData();
      setData(tmp);
    };

    getData();
  }, []);

  return (
    <div
      className="text-white min-w-[330px] relative px-[15px] py-[35px] border-[1px] border-white rounded-lg uppercase"
      style={{
        background:
          "linear-gradient(203.26deg, rgba(189, 0, 255, 0.2) 36.33%, rgba(44, 128, 83, 0.2) 59.91%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      {data && (
        <>
          <h1 className="border-[1px] rounded-xl bg-white text-black text-2xl absolute px-5 py-2 top-[-20px] left-[calc(50%-62px)]">
            STAGE {Number(data?.currentStage) + 1}
          </h1>
          <div className="flex flex-col gap-4 items-center">
            {Math.floor(Date.now() / 1000) < Number(data?.startTime) && (
              <>
                <p className="text-2xl animate-blinker">Presale coming Soon</p>
                <TimeLeftPanel />
                {/* <p>PRESALE STARTS IN</p>
                <Countdown
                  endTime={data?.startTime ? data.startTime : Date.now()}
                /> */}
                <p className="bg-white rounded-lg text-black text-xs px-6 py-1">
                  0 $TMM / 15,000,000,000 $TMM
                </p>
                <p className="text-xs">Buy before price increases</p>
                <p className="text-xs">LISTING PRICE $0.000</p>
                <BuySection disabled={true} />
                <div className="flex w-full items-center mt-10">
                  <div className="min-w-[90px] border-[1px] border-white h-0 ml-[-15px]"></div>
                  <p className="w-full text-xs text-center">0 $TMM sold</p>
                  <div className="min-w-[90px] border-[1px] border-white h-0 mr-[-15px]"></div>
                </div>
              </>
            )}

            {Math.floor(Date.now() / 1000) >= Number(data?.startTime) &&
              Math.floor(Date.now() / 1000) < Number(data?.endTime) && (
                <>
                  <div className="w-full flex flex-start items-center gap-2">
                    <div className="rounded-full w-4 h-4 bg-[#52BF85] animate-blinker"></div>
                    PRESALE
                  </div>
                  <p>STAGE {Number(data?.currentStage) + 1} ENDS IN</p>
                  <Countdown
                    endTime={data?.endTime ? data.endTime : Date.now()}
                  />
                  <p className="bg-white rounded-lg text-black text-xs px-6 py-1">
                    {Number(data?.totalTokensSold)} $TMM / 15,000,000,000 $TMM
                  </p>
                  <p className="text-xs">Buy before price increases</p>
                  <p className="text-xs">
                    LISTING PRICE ${Number(data?.currentPrice) / 10 ** 18}
                  </p>
                  <BuySection disabled={false} />
                  <div className="flex w-full items-center mt-10">
                    <div className="min-w-[90px] border-[1px] border-white h-0 ml-[-15px]"></div>
                    <p className="w-full text-xs text-center">0 $TMM sold</p>
                    <div className="min-w-[90px] border-[1px] border-white h-0 mr-[-15px]"></div>
                  </div>
                </>
              )}

            {Math.floor(Date.now() / 1000) >= Number(data?.endTime) && (
              <>
                <p>PRESALE ENDED AT</p>
                <Countdown
                  endTime={data?.startTime ? data.startTime : Date.now()}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Presale;
