import styles from "./Header.module.scss";
export default function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.left}>
        <h3>YuiVerse</h3>
      </div>
      <div className={styles.right}>
        <h3>Home</h3>
        <h3>Biography</h3>
        <h3>Discography</h3>
        <h3>Blogs</h3>
      </div>
    </div>
  );
}
