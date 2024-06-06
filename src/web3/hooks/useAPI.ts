import { readContract } from "@wagmi/core";
import { sepolia, bscTestnet } from "wagmi/chains";
// import { Address } from "viem";

import { config } from "./config";

import ETHPresaleABI from "../abis/ETHPresale";
import BSCPresaleABI from "../abis/BSCPresale";

const ETHPresaleContract = "0x129185387548Fa43344BA70B353CeC3485b5Ca34";
const BSCPresaleContract = "0x588c6eF92983dD38a30ceD7aA0De31E320e1A365";

export const getPresaleData = async () => {
  const currentStage = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "currentStage",
    chainId: bscTestnet.id,
  });
  const endTime = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "stages",
    args: [2, currentStage],
    chainId: bscTestnet.id,
  });
  const startTime = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "startTime",
    chainId: bscTestnet.id,
  });
  const currentPrice = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "stages",
    args: [1, currentStage],
    chainId: bscTestnet.id,
  });
  const totalUSDRaised = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "totalUsdRaised",
    chainId: bscTestnet.id,
  });
  const totalTokensSold = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "totalTokensSold",
    chainId: bscTestnet.id,
  });

  return {
    currentStage: currentStage as number,
    endTime: endTime as number,
    startTime: startTime as number,
    currentPrice: currentPrice as number,
    totalTokensSold: totalTokensSold as number,
    totalUSDRaised: totalUSDRaised as number,
  };
};

export const getCalcBoardData = async () => {
  const ethPrice = await readContract(config, {
    address: ETHPresaleContract,
    abi: ETHPresaleABI,
    functionName: "getLatestPrice",
    chainId: sepolia.id,
  });

  const bnbPrice = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "getLatestPrice",
    chainId: bscTestnet.id,
  });

  const currentStage = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "currentStage",
    chainId: bscTestnet.id,
  });

  const currentPrice = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "stages",
    args: [1, currentStage],
    chainId: bscTestnet.id,
  });

  const bonusData = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "getBonuses",
    chainId: bscTestnet.id,
  });

  const minAmt = await readContract(config, {
    address: BSCPresaleContract,
    abi: BSCPresaleABI,
    functionName: "minUsdAmountToBuy",
    chainId: bscTestnet.id,
  });

  // const usdtBalance = await readContract(config, {
  //   address: usdtContract as Address,
  //   abi: UsdtABI,
  //   functionName: "balanceOf",
  //   args: [address],
  // });

  return {
    ethPrice: ethPrice as number,
    bnbPrice: bnbPrice as number,
    currentPrice: currentPrice as number,
    bonusData: bonusData as object,
    // balance: usdtBalance as number,
    minAmt: minAmt as number,
  };
};
