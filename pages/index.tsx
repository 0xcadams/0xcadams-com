import type { NextPage } from "next";
import Head from "next/head";
import { App } from "../src/App/App";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>0xcadams</title>
      </Head>
      <App />
    </>
  );
};

export default Home;
