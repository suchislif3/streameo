import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import HomePageLayout from "../layout/Home";
import styles from "../styles/Home.module.css";

const Home = () => {
  return <div className={styles.container}></div>;
};

Home.getLayout = function (page: ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;
