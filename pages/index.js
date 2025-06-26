import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import BreadList from "../components/BreadList";
import styles from "../styles/Home.module.css";
import baseUrl from "../util/baseUrl";

export default function Home({ breadList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Bread Cake Shop in Lagos</title>
        <meta name="description" content="Best bread shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />

     <BreadList breadList={breadList} setClose={setClose} />

      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const fetchDataWithRetry = async (url, retries = 3, delay = 2000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error.message);

        if (attempt === retries) {
          throw error; // Re-throw the error if all retries fail
        }

        // Wait for the specified delay before retrying
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  try {
    const breadList = await fetchDataWithRetry(`${baseUrl}/api/products`);
    return {
      props: {
        breadList,
        admin,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data after retries:", error);
    return {
      props: {
        breadList: [],
        admin,
      },
    };
  }
};
