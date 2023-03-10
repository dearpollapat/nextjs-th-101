import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | Dear pollapat</title>
        <meta name="keywords" content="dearpollapat,shop,sellsomething" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
      </div>
      <div>
        <Image
          src="/wallpaper1.jpg"
          width={1000}
          height={600}
          alt="background"
        />
      </div>
    </>
  );
}
