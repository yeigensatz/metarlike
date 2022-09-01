import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import MetarForm from "../components/metarform";
import Mainpage from "../components/mainpage";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <Head>
        <title>metarLike</title>
        <link rel="icon" href="icon2.ico" />
      </Head>
      <Mainpage></Mainpage>
    </div>
  );
}
