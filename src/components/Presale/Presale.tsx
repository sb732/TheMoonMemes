import CoinButtons from "./CoinButtons";
import TimeLeftPanel from "./TimeLeftPanel";

import "./Presale.css";

const Presale = () => {
  return (
    <div
      className="text-white w-[330px] relative px-[15px] py-[35px] border-[1px] border-white rounded-lg"
      style={{
        background:
          "linear-gradient(203.26deg, rgba(189, 0, 255, 0.2) 36.33%, rgba(44, 128, 83, 0.2) 59.91%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <h1 className="border-[1px] rounded-xl bg-white text-black text-2xl absolute px-5 py-2 top-[-20px] left-[100px]">
        STAGE 1
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-2xl animate-blinker">Presale coming Soon</p>
        <p>STAGE 1 ENDS IN</p>
        <TimeLeftPanel />
        <p className="bg-white rounded-lg text-black text-xs px-6 py-1">
          0 $TMM / 100,000,000,000 $TMM
        </p>
        <p className="text-xs">Buy before price increases</p>
        <p className="text-[10px]">LISTING PRICE $0.000</p>
        <div className="flex gap-1">
          <CoinButtons coin="ETH" />
          <CoinButtons coin="BNB" />
          <CoinButtons coin="USDT" />
        </div>
        <div className="flex gap-2">
          <div>
            <p className="text-[8px] text-left">USDT you pay</p>
            <div className="flex items-center border-[1px] border-white rounded-lg">
              <input type="number" className="bg-transparent w-[100px] p-1" />
              <img
                src="/assets/images/coins/usdt.png"
                className="w-6 h-6"
                alt="usdt"
              />
            </div>
          </div>
          <div>
            <p className="text-[8px] text-left">$TMM you receive</p>
            <div className="flex items-center border-[1px] border-white rounded-lg">
              <input type="number" className="bg-transparent w-[100px] p-1" />
              <img
                src="/assets/images/coins/tmm.png"
                className="w-6 h-6"
                alt="tmm token"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-[#52BF85] rounded-md text-black text-sm min-w-[120px] h-[35px]">
            Buy Now
          </button>
        </div>
        <div className="flex w-full items-center mt-10">
          <div className="min-w-[90px] border-[1px] border-white h-0 ml-[-15px]"></div>
          <p className="w-full text-xs text-center">0 $TTM sold</p>
          <div className="min-w-[90px] border-[1px] border-white h-0 mr-[-15px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
