import {
  readContract,
  simulateContract,
  writeContract,
} from "@wagmi/core";
import { sepolia, bscTestnet } from "wagmi/chains";
import { parseUnits } from "viem";

import { config } from "@/provider/config";

import ETHPresaleABI from "../abis/ETHPresale";
import BSCPresaleABI from "../abis/BSCPresale";

const ETHPresaleContract = "0x129185387548Fa43344BA70B353CeC3485b5Ca34";
const BSCPresaleContract = "0xab90D9D8Fd41876086B2D317Fd42D5E1C81cb750";

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
    // balance: usdtBalance as number,
    minAmt: minAmt as number,
  };
};

export const buyWithETH = async (eth: string, amount: number) => {
  try {
    const { request } = await simulateContract(config, {
      address: ETHPresaleContract,
      abi: ETHPresaleABI,
      functionName: "buyWithEth",
      args: [amount],
      value: parseUnits(eth, 18),
    });

    const hash = await writeContract(config, request);
    console.log(hash);
  } catch (error) {
    console.log("Error: >>>>>>>>>>>>>>>", error);
    return false;
  }
};

export const buyWithBNB = async (eth: string, amount: number, connector: any) => {
  try {
    const { request } = await simulateContract(config, {
      address: BSCPresaleContract,
      abi: BSCPresaleABI,
      functionName: "buyWithEth",
      args: [amount],
      value: parseUnits(eth, 18),
      chainId: bscTestnet.id,
      connector,
    });
    console.log(request);

    const hash = await writeContract(config, request);
    console.log(hash);
  } catch (error) {
    console.log("Error: >>>>>>>>>>>>>>>", error);
    return false;
  }
};

// export const buyWithUSDT = async (
//   usdt: string,
//   amount: number,
//   address: Address,
//   price: number
// ) => {
//   try {
//     const allowance = await readContract({
//       address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
//       abi: UsdtABI,
//       functionName: "allowance",
//       args: [address, presaleContract],
//     });

//     if (Number(allowance) / 10 ** 6 < Number(usdt)) {
//       const approveConfig = await prepareWriteContract({
//         address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
//         abi: UsdtABI,
//         functionName: "approve",
//         args: [presaleContract, parseUnits("1000000", 6)],
//       });

//       await writeContract(approveConfig);

//       await new Promise((r) => setTimeout(r, 2000));
//     }

//     const config = await prepareWriteContract({
//       address: presaleContract,
//       abi: PresaleABI,
//       functionName: "buyWithUSDT",
//       args: [amount],
//     });

//     const { hash } = await writeContract(config);
//     console.log(hash);
//   } catch (error) {
//     console.log("Error: >>>>>>>>>>>>>>>", error);
//   }
// };
