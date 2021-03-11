import styles from "./sidebar.module.css"


/**Side bar component */
const SideBar = () => {
 return (
<div className={styles.main}>
  <h3 className={styles.header} >Recent posts</h3>
  <ol>
    <li><p>Read about finance budget in sacco <a href="#" >Here</a></p></li>
    <li><p>Is a degree really important? <a href="#" >read more?</a></p></li>
    <li><p>How to graduate in a business class <a href="#" >Here</a></p></li>
    <li><p>Read about finance budget in sacco <a href="https://windoshoppe.netlify.app" >Here</a></p></li>
  </ol>
</div>
 )
}
export default SideBar;
