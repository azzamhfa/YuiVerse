import Bio from "../components/bio/Bio";
import Blogs from "../components/blogs/Blogs";
import Disco from "../components/disco/Disco";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import styles from "../styles/Index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Disclaimer from "../components/disclaimer/Disclaimer";
import { useEffect , useState} from "react";


export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://api-yuiverse.herokuapp.com/data");
  const posts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
function Index(posts) {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.sections}>
        <Home />
        <Bio />
        <Disco />
        <Blogs data={posts} />
        <Disclaimer />
      </div>
    </div>
  );
}

export default Index;
