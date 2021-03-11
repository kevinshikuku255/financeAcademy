import {useRouter} from 'next/router';
import styles from "./header.module.css";



const Header = () => {
 const router = useRouter()
 return (
<div className={styles.Header}>
    <h1 className={styles.Name}>Finance Academy</h1>
    <input className={styles.menu_btn} type="checkbox" id="loggedIn_menu_btn"/>
    <label htmlFor="loggedIn_menu_btn" className={styles.menu_icon}>
         <span className={styles.nav_icon}> </span>
    </label>

        <ul className={styles.menu}>
              <li onClick={() => router.push('/finance')} >
                  Finance
              </li>
              <li onClick={() => router.push('/business')} >
                  Business
              </li>
              <li onClick={() => router.push('/procurment')} >
                  Procurment
              </li>
              <li onClick={() => router.push('/insurance')} >
                  Insurance
              </li>
        </ul>
</div>

 )
}

export default Header;