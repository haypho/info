import { ThemeProvider } from "@/features/theme/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/features/app-sidebar/app-sidebar";
import "@/styles/global.css";
import Head from "next/head";
import React, { FC } from "react";

type AppProps = {
  Component: FC;
  pageProps: Record<string, unknown>;
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TooltipProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <Head>
            <title>Hayden Phothong | Portfolio</title>
            <meta
              name="description"
              content="Personal portfolio website for Hayden Phothong"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="google-site-verification"
              content="5n2Yycpl5i4z-4FFdBKeun_z9Fpsw9w6Vu-6pvyp3Rg"
            />
            <link rel="icon" href="/info/favicon.ico" />
          </Head>
          <AppSidebar />
          <SidebarInset>
            <Component {...pageProps} />
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </TooltipProvider>
  );
};

export default App;
