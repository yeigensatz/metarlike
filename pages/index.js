import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Mainpage from "../components/mainpage";
import { Toaster } from "react-hot-toast";
import Test from "../components/test";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <Head>
        <title>metarLike</title>
        <link rel="icon" href="icon2.ico" />
      </Head>
      <Mainpage></Mainpage>
      <Test></Test>
    </div >
  );
}
