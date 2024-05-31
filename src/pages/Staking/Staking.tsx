const Staking = () => {
  return (
    <div className="flex justify-center mx-5">
      <div className="text-white max-w-[1040px] flex flex-col gap-12">
        <div className="w-full md:w-2/3">
          <p className="text-5xl leading-[75px]">
            WELCOME TO $TMM
            <br className="hidden md:block" /> STAKING
          </p>
          <p>
            The distribution of $GBTC token rewards will occur at a rate of 1.6
            $TMM tokens per Ethereum (ETH) block. These rewards will be
            disbursed over 5 months, after which, Gamified Green Bitcoin Staking
            will be launched.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex gap-6">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-1 py-2">
              <p>STAKED BALANCE</p>
              <p>
                0 <sup className="text-[8px]">$TMM</sup>
              </p>
              <p>YOUR BALANCE</p>
              <p>
                0 <sup className="text-[8px]">$TMM</sup>
              </p>
              <button className="border-white border-[1px] rounded-lg py-1 px-5">
                Buy and Stake
              </button>
            </div>
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>0%</p>
              <p>TOTAL STAKED</p>
              <p>
                7,162,534 <sup className="text-[8px]">$TMM</sup>
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>ESTIMATED REWARDS</p>
              <p>
                81% <sup className="text-[8px]">p/a</sup>
              </p>
              <ul className="text-[10px]">
                <li>Rewards rate is dynamic</li>
                <li>Monthly = Rewards % / 12</li>
                <li>Daily = Rewards % / 365</li>
              </ul>
            </div>
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>CURRENT REWARDS</p>
              <p>
                1.6026 <sup className="text-[8px]">Per ETH Block</sup>
              </p>
            </div>
          </div>
          <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
            <p>TOTAL REWARDS</p>
            <p>
              0 <sup className="text-[8px]">$TMM</sup>
            </p>
            <button className="border-white border-[1px] rounded-lg py-1 px-5">
              Claim Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
