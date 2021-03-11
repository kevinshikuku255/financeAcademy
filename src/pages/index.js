import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from "../components/SideBar";
import Header from "../components/Header/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FinanceAcademy | Home</title>
        <link rel="icon" href="/icon.png" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2ceaff" />
        <meta name="description" content="finance academy, all finance consultation and reading"/>
      </Head>

      <div className={styles.body}>
        <Header/>
        <div className={styles.main} >
             <div className={styles.content}>
                <h1>Finance Academy</h1>
                <p>Benson Mutua Blog</p>
                <ol>
                  <li><i>Business couching</i></li>
                   <li><i>Maters Finance both personal and Individual</i></li>
                  <li><i>Enterprenuership and Investment</i></li>
                </ol>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora exercitationem ratione aliquid architecto vero a dicta quis numquam aperiam! Quis iste eveniet incidunt mollitia architecto cumque id obcaecati laborum aperiam.
                </p>
                <h4>Need help?</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla omnis aut necessitatibus molestiae laboriosam officia ut! Voluptates debitis aut dolores cum quasi quaerat, odio sapiente ad minus, iste deleniti dolor, illo molestiae adipisci officia necessitatibus assumenda inventore quis asperiores dolorem blanditiis magni cupiditate quidem? Quod, labore provident rem non dolor obcaecati? Aliquam nam neque velit suscipit enim rem commodi voluptatem dolor qui sed maiores sapiente quam, minima totam voluptatum at!
                </p>

                <br/> <br/>
                <h4>About me</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore laudantium dolore consequuntur fugit excepturi nisi exercitationem, magnam cupiditate, sint id, quidem molestias. Sunt et sapiente quia temporibus, deleniti ipsam unde voluptatem fuga eos, animi quibusdam sint nihil. Dolorem autem dolor minus magnam! Incidunt cupiditate voluptatibus magni commodi, laboriosam quidem animi quod vero tenetur, vitae et explicabo. Voluptas expedita, animi temporibus officia sequi dicta tempora corrupti nisi, suscipit ducimus atque repellendus sint. Nulla labore minus nihil illum. Qui hic beatae tempore eum. Nisi, nostrum labore! Laudantium quidem itaque facere tempora.
                </p> <br/>
                <h3>Amazing</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, reiciendis possimus fugit omnis sequi unde repudiandae odit, esse voluptatum quam sit quaerat eum facilis. Suscipit eum sed quasi tempora dolore ipsa sapiente expedita hic. Ut, vero dolor est perspiciatis praesentium quibusdam minima soluta molestiae voluptas autem, officiis qui? Possimus consequuntur tempora odit voluptatibus quidem excepturi eveniet repellendus ipsum quasi quibusdam qui, deserunt temporibus minima a error numquam incidunt, blanditiis adipisci! Quidem commodi est, corrupti praesentium inventore aperiam dolores nulla veniam eveniet reiciendis quae officiis. Amet illo ut sit odit consequuntur. Aperiam similique, enim, odio consequuntur minima magnam libero expedita illum obcaecati, blanditiis harum fugit vero? Explicabo, optio! Possimus sit harum quidem dicta consequuntur odit dolorum accusamus mollitia, reprehenderit eius, nemo facilis, quia corporis? Nobis dicta ullam accusantium cupiditate temporibus officiis praesentium aperiam illum beatae eveniet unde perspiciatis dolore, laborum libero deserunt facilis vitae reprehenderit labore, magni non saepe aut similique.
                </p>
             </div>
             <div className={styles.sideBar} >
                 <SideBar/>
             </div>
        </div>
      </div>
    </div>
  )
}
