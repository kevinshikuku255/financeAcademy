import styles from "./header.module.css"
function Headline({tag}) {
 return (
  <div className={styles.headline}>
     {tag}
  </div>
 )
}

export default Headline
