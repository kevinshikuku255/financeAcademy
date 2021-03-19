import styles from "./sidebar.module.css"


/**Side bar component */
const SideBar = () => {
 return (
<div className={styles.main}>
  <h3 className={styles.header} >Related articles</h3>
  <ol>
    <li><p>Sole propriatorship<a href="/solepropriator" >Here</a></p></li>
    <li><p>Limited partnership? <a href="limitedpartnership" >read more?</a></p></li>
    <li><p>Partnership deed <a href="/partnership">Here</a></p></li>
  </ol>
</div>
 )
}
export default SideBar;