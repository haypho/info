import { Footer, Welcome } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hayden Phothong | Personal Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio website for Hayden Phothong"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="5n2Yycpl5i4z-4FFdBKeun_z9Fpsw9w6Vu-6pvyp3Rg"
        />
        <link rel="icon" href="/personal-portfolio/favicon.ico" />
      </Head>
      <main>
        <Welcome />
      </main>
      <Footer />
    </>
  );
}
