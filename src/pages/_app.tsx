import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-16 px-2 sm:px-4">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </ThemeProvider>
  );
}
