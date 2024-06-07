import * as React from "react";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { WagmiProvider } from "wagmi";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config, projectId } from "./config";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
