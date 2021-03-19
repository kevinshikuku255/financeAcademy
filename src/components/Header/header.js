import {useRouter} from 'next/router';
import styles from "./header.module.css";



const Header = () => {
 const router = useRouter()
 return (
<div className={styles.Header}>
    <h1 className={styles.Name}>Business Academy</h1>
    <input className={styles.menu_btn} type="checkbox" id="loggedIn_menu_btn"/>
    <label htmlFor="loggedIn_menu_btn" className={styles.menu_icon}>
         <span className={styles.nav_icon}> </span>
    </label>

        <ul className={styles.menu}>
              <li onClick={() => router.push('/solepropriator')} >
                  Sole propriatorship
              </li>
              <li onClick={() => router.push('/partnership')} >
                  Partnership deed
              </li>
              <li onClick={() => router.push('/limitedpartnership')} >
                  Limited Partnership
              </li>
              <li onClick={() => router.push('/')} >
                  Partnership
              </li>
        </ul>
</div>

 )
}

export default Header;