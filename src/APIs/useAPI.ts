import axios from "axios";

import { Address } from "viem";

const BASE = "https://auth-service-gxpf.onrender.com/api";

export const addStakedBalance = async (
  walletAddress: Address,
  stakedBalance: number
) => {
  const path = "addStakedBalance";
  try {
    await axios.post(`${BASE}/${path}`, {
      wallet_address: String(walletAddress),
      staked_balance: Number(stakedBalance),
    });
    console.log("Staked balance added");
  } catch (error) {
    console.error("Failed to add staked balance: ", error);
  }
};

export const getStakedBalance = async (walletAddress: Address) => {
  const path = "getStakedBalance";
  try {
    const response = await axios.get(`${BASE}/${path}/${walletAddress}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get staked balance: ", error);
  }
};

export const getTotalStakedBalance = async () => {
  const path = "getTotalStakedBalance";
  try {
    const response = await axios.get(`${BASE}/${path}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get total staked balance: ", error);
  }
};

export const withdrawStakedBalance = async (walletAddress: Address) => {
  const path = "withdrawStakedBalance";
  try {
    await axios.delete(`${BASE}/${path}/${walletAddress}`);
    console.log("Staked balance withdrawn");
  } catch (error) {
    console.error("Failed to withdraw staked balance: ", error);
  }
};

export const getPoolPercent = async (walletAddress: Address) => {
  const path = "getPoolPercent";
  try {
    const response = await axios.get(`${BASE}/${path}/${walletAddress}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get pool percent: ", error);
  }
};

export const getEstimatedRewards = async () => {
  const path = "getEstimatedRewards";
  try {
    const response = await axios.get(`${BASE}/${path}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get estimated rewards: ", error);
  }
};

export const getCurrentRewards = async () => {
  const path = "getCurrentRewards";
  try {
    const response = await axios.get(`${BASE}/${path}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get current rewards: ", error);
  }
};

export const getTotalRewards = async (walletAddress: Address) => {
  const path = "getTotalRewards";
  try {
    const response = await axios.get(`${BASE}/${path}/${walletAddress}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to get total rewards: ", error);
  }
};
