import styles from "./Header.module.scss";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img src="/icon.png" alt="" />
        <h2>
          <Link href="#home">
            <a>YuiVerse</a>
          </Link>
        </h2>
      </div>
      <div className={styles.right}>
        <h3>
          <Link href="#home">
            <a>Home</a>
          </Link>
        </h3>
        <h3>
          <a href="#bio">Biography</a>
        </h3>
        <h3>
          <a href="#discography">Discography</a>
        </h3>
        <h3>
          <a href="#blogs">Blogs</a>
        </h3>
      </div>
    </div>
  );
}
