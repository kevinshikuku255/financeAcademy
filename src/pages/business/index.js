import { useRouter } from "next/router";
import SideBar from "../../components/SideBar";
import styles from "./business.module.css";

const Business = () => {
   const router = useRouter()
 return(
   <div className={styles.main} >
      <main className={styles.sideA}>
         <h1 className={styles.title} >Business Article</h1>
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolore eligendi magni nostrum cumque sapiente vel non alias porro adipisci obcaecati aspernatur, laboriosam autem quisquam minus unde recusandae et praesentium.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ut atque mollitia laudantium aliquam. Omnis, magni? Quos expedita pariatur impedit cumque cupiditate voluptatibus doloribus minus magnam molestiae quis maxime, modi iure ab. Esse vero delectus praesentium quisquam in. Hic, fugiat eos. Ratione quam sapiente excepturi, repellendus sed libero dolor similique earum iste odio porro quis minima odit deleniti adipisci voluptas nesciunt. Praesentium unde hic aperiam natus debitis earum rerum nisi culpa dolor ducimus, pariatur consequuntur delectus, veritatis ut ratione dicta reiciendis. Cumque debitis accusantium architecto adipisci repudiandae asperiores ratione, sapiente, id veritatis quibusdam quis vitae est repellat nostrum sint quo!
         </p>
         <h2>Another paragraph</h2>
         <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam minus distinctio dolorum ratione repudiandae voluptate ut explicabo nesciunt neque assumenda aperiam, rerum laudantium commodi placeat eum, accusamus sint iusto nemo exercitationem minima. Quod natus ducimus necessitatibus! Assumenda aliquid quia voluptas! Repudiandae sunt nulla quod nemo quidem quas cupiditate itaque!
         </p>
         <h2>Last paragraph</h2>
         <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam minus distinctio dolorum ratione repudiandae voluptate ut explicabo nesciunt neque assumenda aperiam, rerum laudantium commodi placeat eum, accusamus sint iusto nemo exercitationem minima. Quod natus ducimus necessitatibus! Assumenda aliquid quia voluptas! Repudiandae sunt nulla quod nemo quidem quas cupiditate itaque!
         </p>
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