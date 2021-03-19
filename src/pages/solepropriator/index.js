import Head from 'next/head';
import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import styles from "./solepropriator.module.css";
import Header from "../../components/Header/header";
import HeadLine from "../../components/Header/Headline"

const Finance = () => {
const router = useRouter();
 return(
   <div className={styles.main} >

      <Head>
        <title> BusinessAcademy | Sole propriatorship </title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Sole proprietorship is a form of business that is owned by one individual only. "/>
      </Head>

      <main className={styles.sideA}>
         <Header/>
         <HeadLine tag="SOLE PROPRIATORSHIP AND ITS CHARACTERISTICS."/>
         <p className={styles.solepropriator_definition} >Sole proprietorship is a form of business that is owned by one individual only. Sole proprietorship does not have a separate legal entity from the owner hence owner of the entity being fully liable for all liabilities incurred by the business.</p>


         <h3>Characteristics of sole proprietorship</h3>
         <ul>
            <li className={styles.li} >Sole ownership. The owner is just one individual who is responsible for all activities taking place in the business. He enjoys all the profits and bears all risks associated with the business.</li>

            <li className={styles.li} >Unlimited liability. The business lacks separate legal entity. Sole proprietor is personally liability for all debts and obligations of the firm. If the sole proprietorship business cannot settle its obligation on its own, the personal assets of the owner will be used settle obligations of the firm.</li>

            <li className={styles.li} >sole management. The owner is responsible for all management activities taking place in the business. Management activities include decision on expansion of the firm, how many employees should he have and how much to pay them among other activities.</li>

            <li className={styles.li} >No legal formalities. Business can easily be formed because does not need to fulfill any legal formalities like registration as it is a requirement in partnership and the other forms of business.</li>

            <li className={styles.li} >Easy to commence and closure. Sole proprietor can commence his business anytime and bring it to an end when he wishes to.</li>

            <li className={styles.li} >Bears full right on the capital of the business.</li>
         </ul>


         <h3>Characteristics of sole proprietorship</h3>
         <ul>
            <li className={styles.lii}>The owner enjoys all the profits alone, thus acting as a motivation to continue with the business.</li>

            <li className={styles.lii}>Business secret regarding its success, material used, methods of manufacturing are safe from business’s competitors.</li>

            <li className={styles.lii}> Easy to establish and lacks many legal formalities. The formation process requires minimum fee as well as very little paperwork.</li>

            <li className={styles.lii}> Minimal startup expenses.</li>

            <li className={styles.lii}> Easy to make decision hence highly flexib le.</li>

            <li className={styles.lii}>There is minimum legal restriction.</li>

            <li className={styles.lii}>Tax advantages. The business itself does not pay income tax because it lacks separate legal entity but instead the owner pays personal income tax based on profits earned from the business.</li>
         </ul>


         <h3>Disadvantages of sole proprietorship</h3>
         <ol>
            <li>Limited life. The death of a proprietor brings the sole proprietorship to an end.</li>
            <li>Unlimited liability. Business creditors can take the personal property of the owner if the business is in position not being able to settle the claims on its own.</li>
            <li>The owner bears all losses alone is also solely liable for all obligations and debts of the business.</li>
            <li>Limitations on capital increments. Sole proprietorship has limited options of raising additional capital. Obtaining loan depends on personal credit score.</li>
         </ol>

         <br/>
         <h2 className={styles.link}  onClick={() => router.push("/")} >Back</h2>
      </main>
      <div className={styles.sideB} >
         <SideBar/>
      </div>
   </div>
 )
}
export default Finance;