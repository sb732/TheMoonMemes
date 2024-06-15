import { readContract, simulateContract, writeContract } from "@wagmi/core";
import { mainnet, sepolia, bscTestnet } from "wagmi/chains";
import { Address, parseUnits } from "viem";

import { config } from "@/provider/config";

import ETHPresaleABI from "../abis/ETHPresale";
import BSCPresaleABI from "../abis/BSCPresale";
import ETHUSDTABI from "../abis/ETHUSDT";
import BSCUSDTABI from "../abis/BSCUSDT";

const ETHPresaleContract = "0x129185387548Fa43344BA70B353CeC3485b5Ca34";
const BSCPresaleContract = "0x588c6eF92983dD38a30ceD7aA0De31E320e1A365";
const ETHUSDTContract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const BSCUSDTContract = "0x55d398326f99059fF775485246999027B3197955";

export const getPresaleData = async () => {
  const presaleContract = BSCPresaleContract;
  const presaleABI = BSCPresaleABI;
  const presaleChain = bscTestnet.id;

  const currentStage = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "currentStage",
    chainId: presaleChain,
  });
  const endTime = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "stages",
    args: [2, currentStage],
    chainId: presaleChain,
  });
  const startTime = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "startTime",
    chainId: presaleChain,
  });
  const currentPrice = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "stages",
    args: [1, currentStage],
    chainId: presaleChain,
  });
  const ETHTotalUSDRaised = await readContract(config, {
    address: ETHPresaleContract,
    abi: ETHPresaleABI,
    functionName: "totalUsdRaised",
    chainId: sepolia.id,
  });

  const BSCTotalUSDRaised = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "totalUsdRaised",
    chainId: presaleChain,
  });
  const ETHTotalTokensSold = await readContract(config, {
    address: ETHPresaleContract,
    abi: ETHPresaleABI,
    functionName: "totalTokensSold",
    chainId: sepolia.id,
  });
  const BSCTotalTokensSold = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "totalTokensSold",
    chainId: presaleChain,
  });

  return {
    currentStage: currentStage as number,
    endTime: endTime as number,
    startTime: startTime as number,
    currentPrice: currentPrice as number,
    totalTokensSold:
      (ETHTotalTokensSold as number) + (BSCTotalTokensSold as number),
    totalUSDRaised:
      (ETHTotalUSDRaised as number) + (BSCTotalUSDRaised as number),
  };
};

export const getCalcBoardData = async (address: Address) => {
  const presaleContract = BSCPresaleContract;
  const presaleABI = BSCPresaleABI;
  const presaleChain = bscTestnet.id;

  const ethPrice = await readContract(config, {
    address: ETHPresaleContract,
    abi: ETHPresaleABI,
    functionName: "getLatestPrice",
    chainId: sepolia.id,
  });

  const bnbPrice = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "getLatestPrice",
    chainId: presaleChain,
  });

  const currentStage = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "currentStage",
    chainId: presaleChain,
  });

  const currentPrice = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "stages",
    args: [1, currentStage],
    chainId: presaleChain,
  });

  const minAmt = await readContract(config, {
    address: presaleContract,
    abi: presaleABI,
    functionName: "minUsdAmountToBuy",
    chainId: presaleChain,
  });

  const ethUsdtBalance = address
    ? await readContract(config, {
        address: ETHUSDTContract,
        abi: ETHUSDTABI,
        functionName: "balanceOf",
        args: [address],
        chainId: mainnet.id,
      })
    : 0;

  const bscUsdtBalance = address
    ? await readContract(config, {
        address: BSCUSDTContract,
        abi: BSCUSDTABI,
        functionName: "balanceOf",
        args: [address],
        chainId: bscTestnet.id,
      })
    : 0;

  return {
    ethPrice: ethPrice as number,
    bnbPrice: bnbPrice as number,
    currentPrice: currentPrice as number,
    ethUsdtBalance: ethUsdtBalance as number,
    bscUsdtBalance: bscUsdtBalance as number,
    minAmt: minAmt as number,
  };
};

export const buyWithETH = async (
  eth: string,
  amount: number,
  connector: any
) => {
  try {
    const { request } = await simulateContract(config, {
      address: ETHPresaleContract,
      abi: ETHPresaleABI,
      functionName: "buyWithEth",
      args: [amount, 5],
      value: parseUnits(eth, 18),
      chainId: sepolia.id,
      connector,
    });

    const hash = await writeContract(config, request);
    console.log(hash);
  } catch (error) {
    console.log("Error: >>>>>>>>>>>>>>>", error);
    return false;
  }
};

export const buyWithBNB = async (
  eth: string,
  amount: number,
  connector: any
) => {
  try {
    const { request } = await simulateContract(config, {
      address: BSCPresaleContract,
      abi: BSCPresaleABI,
      functionName: "buyWithEth",
      args: [amount, 5],
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

export const buyWithUSDT = async (
  usdt: string,
  amount: number,
  address: Address,
  connector: any,
  network: string
) => {
  try {
    const presaleContract =
      network === "ETH" ? ETHPresaleContract : BSCPresaleContract;
    const presaleABI = network === "ETH" ? ETHPresaleABI : BSCPresaleABI;
    const presaleChain = network === "ETH" ? sepolia.id : bscTestnet.id;
    const usdtContract = network === "ETH" ? ETHUSDTContract : BSCUSDTContract;
    const usdtABI = network === "ETH" ? ETHUSDTABI : BSCUSDTABI;

    const allowance = await readContract(config, {
      address: usdtContract,
      abi: usdtABI,
      functionName: "allowance",
      args: [address, presaleContract],
      chainId: presaleChain,
    });

    if (Number(allowance) / 10 ** 18 < Number(usdt)) {
      const { request } = await simulateContract(config, {
        address: usdtContract,
        abi: usdtABI,
        functionName: "approve",
        args: [presaleContract, parseUnits(usdt, 18)],
        chainId: presaleChain,
        connector,
      });

      await writeContract(config, request);

      await new Promise((r) => setTimeout(r, 2000));
    }

    const { request } = await simulateContract(config, {
      address: presaleContract,
      abi: presaleABI,
      functionName: "buyWithUSDT",
      args: [amount],
      chainId: presaleChain,
      connector,
    });

    const hash = await writeContract(config, request);
    console.log(hash);
  } catch (error) {
    console.log("Error: >>>>>>>>>>>>>>>", error);
  }
};
