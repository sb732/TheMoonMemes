import * as translation from "@/translation/en.json";

const Staking = () => {
  return (
    <div className="flex justify-center mx-5 pt-5">
      <div className="text-white max-w-[1040px] flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-2/3">
            <p className="text-5xl leading-[75px]">
              {translation.staking.title}
            </p>
            <p>{translation.staking.content}</p>
          </div>
          <div>
            <button className="bg-[#FFC700] rounded-lg py-2 px-10 text-xl">
              {translation.staking.withdrawButton}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex gap-6 justify-between w-full md:w-2/5">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-1 py-2">
              <p>{translation.staking.stakedbalance}</p>
              <p>
                0 <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
              <p>{translation.staking.yourbalance}</p>
              <p>
                0 <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
              <button className="bg-[#FFC700] rounded-lg py-1 px-5">
                {translation.staking.buy}
              </button>
            </div>
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>0{translation.staking.percent}</p>
              <p>{translation.staking.totalstaked}</p>
              <p>
                7,162,534{" "}
                <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-between w-full md:w-2/5">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>{translation.staking.estimatedrewards}</p>
              <p>
                81{translation.staking.percent}{" "}
                <sup className="text-[8px]">{translation.staking.pa}</sup>
              </p>
              <ul className="text-[10px]">
                <li>{translation.staking.des1}</li>
                <li>{translation.staking.des2}</li>
                <li>{translation.staking.des3}</li>
              </ul>
            </div>
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>{translation.staking.currentrewards}</p>
              <p>
                1.6026{" "}
                <sup className="text-[8px]">
                  {translation.staking.perethblock}
                </sup>
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-between w-full md:w-1/5">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>{translation.staking.totalrewards}</p>
              <p>
                0 <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
              <button className="bg-[#FFC700] rounded-lg py-1 px-5">
                {translation.staking.claimrewards}
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-white rounded-xl p-3 md:py-[35px] md:px-[50px] flex flex-col md:flex-row justify-between items-center gap-2">
          <img src="/assets/images/staking1.png" />
          <img
            src="/assets/images/staking2.png"
            className="w-full max-w-[340px] max-h-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Staking;
