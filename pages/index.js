import Bio from "../components/bio/Bio";
import Header from "../components/header/header";
import Home from "../components/home/Home";
import styles from "../styles/Index.module.scss";
export default function Index() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.sections}>
        <Home />
        <Bio/>
      </div>
    </div>
  );
}
