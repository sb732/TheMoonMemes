import { useState } from "react";

// import { useAccount } from "wagmi";

// import {
//   addStakedBalance,
//   getCurrentRewards,
//   getEstimatedRewards,
//   getPoolPercent,
//   getStakedBalance,
//   getTotalRewards,
//   getTotalStakedBalance,
// } from "@/APIs/useAPI";
// import { getTMMBalance } from "@/web3/hooks/useAPI";
import * as translation from "@/translation/en.json";

const Staking = () => {
  // const { address } = useAccount();

  const [balance,] = useState(0);
  const [stakedBalance,] = useState(0);
  const [poolPercent,] = useState(0);
  const [totalStakedBalance,] = useState(0);
  const [estimatedRewards,] = useState(0);
  const [currentRewards,] = useState(0);
  const [totalRewards,] = useState(0);

  // async function fetchAPI() {
  //   if (address) {
  //     const _stakedBalance = await getStakedBalance(address);
  //     setStakedBalance(_stakedBalance);

  //     const _poolPercent = await getPoolPercent(address);
  //     setPoolPercent(_poolPercent);

  //     const _totalRewards = await getTotalRewards(address);
  //     setTotalRewards(_totalRewards);

  //     const _balance = await getTMMBalance(address);
  //     setBalance(_balance.tmmBalance ?? 0);
  //   }

  //   const _totalStakedBalance = await getTotalStakedBalance();
  //   setTotalStakedBalance(_totalStakedBalance);

  //   const _estimatedRewards = await getEstimatedRewards();
  //   setEstimatedRewards(_estimatedRewards);

  //   const _currentRewards = await getCurrentRewards();
  //   setCurrentRewards(_currentRewards);
  // }

  // useEffect(() => {
  //   fetchAPI();
  // }, [address]);

  // const handleStaking = async (balance: number) => {
  //   if (address) {
  //     await addStakedBalance(address, balance);
  //     fetchAPI();
  //   }
  // };

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
                {stakedBalance}{" "}
                <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
              <p>{translation.staking.yourStakeable}</p>
              <p>
                {Number(balance) - Number(stakedBalance)}{" "}
                <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
              {Number(balance) - Number(stakedBalance) == 0 && (
                <a href="/#buynow">
                  <button className="bg-[#FFC700] rounded-lg py-1 px-5">
                    {translation.staking.buy}
                  </button>
                </a>
              )}
              {Number(balance) - Number(stakedBalance) > 0 && (
                <button
                  className="bg-[#FFC700] rounded-lg py-1 px-5"
                  // onClick={() =>
                  //   handleStaking(Number(balance) - Number(stakedBalance))
                  // }
                >
                  {translation.staking.stake}
                </button>
              )}
            </div>
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>{poolPercent + translation.staking.percent}</p>
              <p>{translation.staking.totalstaked}</p>
              <p>
                {totalStakedBalance}{" "}
                <sup className="text-[8px]">{translation.staking.tmm}</sup>
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-between w-full md:w-2/5">
            <div className="border-white border-[1px] rounded-lg flex flex-col items-center justify-center w-full gap-5 py-2">
              <p>{translation.staking.estimatedrewards}</p>
              <p>
                {estimatedRewards}
                {translation.staking.percent}{" "}
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
                {currentRewards}{" "}
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
                {totalRewards}{" "}
                <sup className="text-[8px]">{translation.staking.tmm}</sup>
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
