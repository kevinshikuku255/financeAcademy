import Head from 'next/head';
import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import styles from "./partnership.module.css";
import Header from "../../components/Header/header";
import HeadLine from "../../components/Header/Headline";


const Business = () => {
   const router = useRouter()
 return(
   <div className={styles.main} >
      <Head>
        <title> BusinessAcademy | partnership deed  </title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Partnership deed is an agreement made between two or more partners of a firm that outlines the terms and conditions of a partnership among the partners "/>
      </Head>

      <main className={styles.sideA}>
         <Header/>
         <HeadLine tag="PARTNERSHIP DEED"/>

         <h2>What is partnership deed </h2>
         <p>
          Partnership deed is an agreement made between two or more partners of a firm that outlines the terms and conditions of a partnership among the partners
         </p> <br/>
         <h2>Partnership deed contents.</h2>
         <p>
          If the partners decide to register the partnership, they will be required to have a partnership deed. Such document will contain the following;
         </p>
         <ul>
            <li>Name and addresses of the partnership.</li>
            <li>Nature of business.</li>
            <li>Date of commencement.</li>
            <li>Capital contribution of the partners.</li>
            <li>The rate of interest on partner’s capital, interest to be charged on drawings and partners loan interest rate.</li>
            <li>The maximum withdrawal amount by each partner.</li>
            <li>Procedure for settlement of disputes.</li>
            <li>Ratio of sharing profits and losses of the business among partners.</li>
            <li>Power of partners.</li>
            <li>Expulsion of Partners.</li>
         </ul> <br/> <br/>


         <h2>Rules applicable in the absence of partnership deed  </h2>
         <ol>
	<li> <strong>Profit sharing ratio: </strong> the partners will share Profit and losses equally</li>

	<li> <strong>Indemnity: </strong>If a partner incurs liability while discharging the firm’s obligations he is entitled to indemnity.</li>

	 <li> <strong>Interest on principal:</strong> If a partner lends money to the firm, he is entitled to interest on the principal at the rate of 6% per annum.</li>

	 <li> <strong>Salary and commission:</strong> Partners will not get a salary also a partner is not entitled to remuneration for taking part in the management of the firm’s business.</li>

	 <li> <strong>New partner:</strong> A person can only be admitted as partner with consent of all existing partners.</li>

	<li> <strong>Interest on capital: </strong> A partner is not entitled to interest on capital before the ascertainment of profit.</li>

	 <li> <strong>Firms management:</strong> Every partner is entitled to take part in the management of the firm’s business.</li>

	 <li> <strong>Accessing books of account:</strong> The books of account of the firm must be accessible to all parties.</li>

         </ol> <br/>


   <h2>Importance/Purpose of partnership deed</h2>
   <ol>
       <li className={styles.importance_of_partnership_deed}> <strong>Builds trust among partners.</strong>  Partnership deed explains each member’s responsibility and the rights of partners of all partners withing the organization, hence one can trust other partners. The agreement clearly provides the required guideline on standard method of accounting for cash flow, how to prepare profit and loss account, the method used to evaluate for assets and liabilities within the firm.</li>

      <li className={styles.importance_of_partnership_deed}> Partnership regulates the rights, duties, and liabilities of each partner. Helps in avoiding any kind of dispute a and agreement which might rise in future. </li>


    <li className={styles.importance_of_partnership_deed}>Clear methods of dispute settlement amongst partners. If there is rise in dispute among partners or with third party, partnership deed is referred. When a partner dies, the partnership deed will act as reference point on how to settle the accounts.</li>

	 <li className={styles.importance_of_partnership_deed}>Partnership deed provided records of the terms and condition of the partnership business.</li>

	 <li className={styles.importance_of_partnership_deed}>Provides clear rules and regulations governing the firm.</li>

   </ol>

      <br/>
       <h2 className={styles.link} onClick={() => router.push("/")} >Back</h2>
      </main>
      <div className={styles.sideB} >
         <SideBar/>
      </div>
   </div>
 )
}
export default Business;