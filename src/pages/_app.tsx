import "@/styles/global.css";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Head from "next/head";
import React, { FC } from "react";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const bodyFont = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

type AppProps = {
  Component: FC;
  pageProps: Record<string, unknown>;
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div
      className={`home ${displayFont.variable} ${bodyFont.variable} font-body min-h-screen bg-sage text-[17px] leading-relaxed text-ink`}
    >
      <Head>
        <title>Hayden Phothong | Portfolio</title>
        <meta
          name="description"
          content="Hayden Phothong is a senior frontend engineer in Seattle who loves UI craft and taking products from zero to one."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="5n2Yycpl5i4z-4FFdBKeun_z9Fpsw9w6Vu-6pvyp3Rg"
        />
        <link rel="icon" href="/info/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
