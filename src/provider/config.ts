import { http } from "@wagmi/core";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { mainnet, bsc, sepolia, bscTestnet } from "wagmi/chains";

// 1. Get projectId at https://cloud.walletconnect.com
export const projectId = "c12e0b5dc354ac1b746cec01d47b5b6a";

// 2. Create wagmiConfig
const metadata = {
  name: "Themememoon",
  description: "The meme moon space",
  url: "http://localhost:5173", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia, bscTestnet] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  transports: {
    [sepolia.id]: http(),
    [bscTestnet.id]: http(),
  },
});
