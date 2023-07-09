import "@/styles/global.css";
import React, { FC } from "react";

type AppProps = {
  Component: FC;
  pageProps: Record<string, unknown>;
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
