import Head from 'next/head';
import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import styles from "./ltd.module.css";
import Header from "../../components/Header/header";
import HeadLine from "../../components/Header/Headline";


const Business = () => {
   const router = useRouter()
 return(
   <div className={styles.main} >
      <Head>
        <title> BusinessAcademy | Limited partnership  </title>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="This is the partner which has limited liability to the amount of capital which they have contributed to the business. "/>
      </Head>

      <main className={styles.sideA}>
         <Header/>
         <HeadLine tag="GENERAL TYPES OF PARTNERS."/><br/>

         <h2>Characteristics of a limited partnership. </h2>
         <p>
          In limited partnership the liability of some persons is limited to the amount of capital which they have contributed to the business and certain persons are liable for all the obligations of the firm.
         </p> <br/>

         <h3>The following are the main characteristics of a limited partnership.</h3>
          <ul>
           <li>	<strong>General partner.</strong> This is the partner(s) which has unlimited liability and is liable for all debts of the firm.</li>

           <li> <strong>Limited partner. </strong> This is the partner which has limited liability whereby their liability is limited to the amount of capital which they have contributed to the business. There must be at least one limited partner in a limited partnership.</li>

          <li> <strong>Admission of a new partners.</strong> New partners can have admission in the partnership without the consent of the limited partner.</li>

         <li> <strong>Proposals and advice:</strong> limited partners are allowed to give advice and proposals to the active partners.</li>

         <li> <strong>Inspection of books of account.</strong> All partners including limited partners can inspect and verify all types of accounts at any time.</li>

         <li> <strong>Limited participation.</strong> A limited partner cannot bind the other partners by his action because they are not allowed to participate in the management process.</li>

         <li> <strong>Transferability of share.</strong> The share of a limited partner can be transferred to another partner but only with consent of all general partners.</li>

          </ul> <br/>


       <h3>GENERAL TYPES OF PARTNERS.</h3>
       <ol>
          <li> <strong>General partner:</strong> This is the partner who has unlimited liability and is liable for all debts of the firm. He or she is liable to the extent of his separate property after all the assets of the partnership are exhausted.</li>

         <li> <strong>Limited partner:</strong>  Is the one who is liable to the extent of his capital contribution. This is the partner which has limited liability to the amount of capital which they have contributed to the business.</li>

         <li> <strong>Nominal partner:</strong> nominal partner is the one who does not have any real or significant interest in the partnership firm but instead lends his name to the firm. This partner does not take any part in management of the business.</li>

         <li> <strong>Secret partner.</strong> One who takes active part in the business but outsiders and third parties does not know him as a partner. Secret partner has unlimited liability in the firm.</li>

         <li> <strong>Dormant partner/sleeping partner.</strong>  One who does not take active part in the business of the partnership and is not known as a partner. There are circumstances where a partner has sufficient money and interest in the firm but cannot devote his time to the business, then this partner can act as a sleeping partner.</li>

        <li> <strong>Active or management partner:</strong> is a partner who mainly takes part in the day to day activities of the business on behalf of the other members. He or she also takes active part in the management of the business.</li>

        <li> <strong>Minor partner.</strong> Is a person who is yet to attain the age of majority.  Law prohibits a minor from entering in to a binding agreement because agreement entered by a minor is void and initio. Note that a minor partner will have a share of the profits of the firm but his liability for losses is only limited to his share of the firm.</li>

       <li> <strong>Outgoing partner.</strong> This is a partner who voluntary retires without dissolving the firm. An outgoing partner is liable for all his debts and obligation which are only held before his retirement.</li>

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