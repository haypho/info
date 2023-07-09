import Head from "next/head";
import styled from "@emotion/styled";
import { MainAppBar } from "@/components/home/MainAppBar";
import { Jumbotron } from "@/components/common/Jumbotron";
import { Welcome } from "@/components/home/Welcome";
import { Projects } from "@/components/home/Projects";
import { WebProjects } from "@/components/home/WebProjects";
import { Footer } from "@/components/home/Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <MainAppBar />
        <Jumbotron src="/notebook.jpg">Personal Portfolio</Jumbotron>
        <Welcome />
        <Projects />
        <WebProjects />
      </Main>
      <Footer />
    </>
  );
}
