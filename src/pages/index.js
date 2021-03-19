import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from "../components/SideBar";
import Header from "../components/Header/header";
import  HeadLine from "../components/Header/Headline";

export default function Home() {
  const headline = (
    <p>PARTNERSHIP</p>
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>BusinessAcademy | Partnership</title>
        <link rel="icon" href="/icon.png" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2ceaff" />
        <meta name="description" content="A partnership is a form of business where two or more parties share ownership as well as the responsibility for managing the firm and all the operations of the business."/>
      </Head>

      <div className={styles.body}>
        <Header/>
        <div className={styles.main} >
             <div className={styles.content}>
                 <HeadLine tag={headline}/>

                <p className={styles.meaning_of_patnership}>
                     A partnership is a form of business where two or more parties share ownership as well as the responsibility for managing the firm and all the operations of the business.
                </p>

                <h3> <strong>Characteristics of partnership include;</strong> </h3>
                <ol>
                  <li> <strong>Agreement.</strong> The partnership cannot be formed without an agreement. This is an important characteristic of a partnership. The parties concerned must be in a common agreement in order for a partnership to prosper</li> <br/>

                   <li> <strong>Number of partners.</strong>	 In order to form a partnership, there should be more than one person and a maximum of twenty people. </li> <br/>

                  <li> <strong> Division of profits and losses. </strong> Partnership exists with an aim of making profit. The more the generation of sales, the more the profit to be shared and vice versa. The essence of a partnership is that each partner must share in the profits and losses of the venture either equally or according to a certain ratio which is specified in partnership agreement.</li> <br/>

                 <li> <strong>Each partner is an agent of the other in the firm. </strong>This is called mutual agency. One partner is an agent as well as the principal to another partner. In the position of an agent, he or she can make a valid contract with a third party on behalf of the partnership firm. Any partner can bind the other partners to a contract and this is only if the partner is acting within his express or implied authority.</li> <br/>

                 <li> <strong>Limited life.</strong> A partnership has a limited life. Death, insanity or bankrupt of partners may lead to dissolution. It may also be dissolved by withdrawal of a partner from the partnership or expiration of the terms specified in the partnership agreement. </li> <br/>

                 <li> <strong>	Unlimited liability.</strong> Has no legal separate entity apart from its members. A partner’s liability to debts and obligations of the firm is generally unlimited. All partners are liable for debts incurred by the partnership. This means if a partnership cannot settle its obligation, the personal assets of the partners can be used to settle obligations of the firm.</li> <br/>

                 <li> <strong>Can sue or be sued. </strong> The partnership firm can sue outsiders or third parties in its registered name likewise it can be sued.</li>
                 <li>Specialization of labour: In case of professional firms, partners can share the workload and the reward. This promotes better life balance because one can have leave when necessary knowing that there is trusted person in charge.</li>

                 <li> Tax benefits.  General partnership does not pay income taxes instead all profits and losses are taxed on individual partners after they have received their shares from the partnership’s income. This allows partners to deduct any business losses from their individual tax return.</li>
                </ol>


                <br/> <br/>
                <h3> <strong>Advantages of partnership </strong> </h3>
                <ul>
                  <li> Easy to form since do not require many legal formalities.</li>
                  <li> There is more cash. Partners can pool their resources to fund the start-up of the partnership.     Business resources are easy to acquire through contribution from the partners.
                  </li>
                  <li> Cost savings. There is substantial savings in a partnership than in sole proprietorship because it allows a partner to share the burden of expenses</li>
                  <li> Losses are shared among the partners hence one partner does not have to bear all losses alone.</li>
                </ul>



                <br/> <br/>
                <h3> <strong>Disadvantages of a partnership. </strong> </h3>
                <ul>
                  <li>Unlimited liability. Liabilities of partners for debts and obligations of the firm is unlimited i.e. partners are liable to use personal assets if the firm is insolvent. </li>

                  <li>Profit sharing reduces the amount available to individual partners.</li>

                  <li>Delayed decision-making. Risk of disagreements and friction among partners and management may delay decision making hence being a disadvantage to the partnership.</li>

                  <li> Each partner is an agent of the partnership and is liable for actions of other partners. A single partner’s mistake affects all partners. </li>

                  <li> Dissolution may occur anytime in circumstances of death, bankruptcy or insanity of a partner.</li>

                  <li>Tends to rely on a single partners effort to manage.</li>
                </ul>



             </div>
             <div className={styles.sideBar} >
                 <SideBar/>
             </div>
        </div>
      </div>
    </div>
  )
}
