import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.text}>
          <h1>YuiVerse</h1>
          <h2>Kobayashi Yui Landing Page</h2>
          <p>by @azzamhfa</p>
        </div>
      </div>
    </div>
  );
}
