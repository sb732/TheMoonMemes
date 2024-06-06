import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia, bscTestnet } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [mainnet, sepolia, bscTestnet],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bscTestnet.id]: http(),
  },
});
