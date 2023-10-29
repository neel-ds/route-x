import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { WagmiConfig } from "wagmi";
import { wagmiConfig, ethereumClient } from "@/context/wagmiConfig";
import { Web3Modal } from "@web3modal/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <WagmiConfig config={wagmiConfig}>
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-16 px-2 sm:px-4">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
      <Footer />
      </WagmiConfig>
      <Web3Modal
        projectId={"33e28c5d43009b3668cccf62984e6dbe"}
        ethereumClient={ethereumClient}
      />
    </ThemeProvider>
  );
}
