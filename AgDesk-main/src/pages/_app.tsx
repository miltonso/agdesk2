// pages/_app.tsx
import "@/styles/globals.css";
import "@/styles/satoshi.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/RootLayout/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}