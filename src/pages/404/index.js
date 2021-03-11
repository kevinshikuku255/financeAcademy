import Head from 'next/head';
import { useRouter } from "next/router";
import styles from "./404.module.css"

const NoftFound = () => {
  const router = useRouter()
 return(
   <>
      <Head>
        <title>FinanceAcademy | Home</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
          <h1>Not found </h1>
          <br/>
          <br/>
          <br/>
          <p onClick={() => router.push("/")} >Click here to go back</p>
      </main>
   </>
 )
}

export default NoftFound;