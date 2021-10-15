import styles from "./Bio.module.scss";
// import "./carousel.css";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function Bio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.bio}>
      <div className={styles.left}>
        <img src="/profile1.jpg" alt="" />
        <p>©Seed&Flowers - Nagaredama 2021</p>

        <div className={styles.gallery}>
          <h3>Gallery</h3>

          {/* <Slider {...settings}>
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
          </Slider> */}
          {/* <div className={styles.caro}> */}
          <Carousel
          // centerMode={true}
          // centerSlidePercentage="50%"
            width="50%"
            autoPlay={true}
            interval="3000"
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            autoFocus={true}
          >
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
            <div>
              <img src="/profile1.jpg" alt="pp1" />
              <p>©Seed&Flowers - Nagaredama 2021</p>
            </div>
          </Carousel>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.content1}>
          <div className={styles.headers}>
            <h2>BIOGRAPHY</h2>
            <h1>Kobayashi Yui | 小林 由依</h1>
          </div>

          <div className={styles.data}>
            <div className={styles.datas}>
              <h2>Birthdate</h2>
              <p>October 23, 1999</p>
            </div>
            <div className={styles.datas}>
              <h2>Height</h2>
              <p>161 cm </p>
            </div>
            <div className={styles.datas}>
              <h2>Birthplace</h2>
              <p>Saitama Perfecture </p>
            </div>
            <div className={styles.datas}>
              <h2>Bloodtype</h2>
              <p>A </p>
            </div>
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.header}>
            <h2>Pon Fact</h2>
            <p>Ini Content Nantinya</p>
          </div>
          <div className={styles.media}>
            <h2>Media Links</h2>
            <Button variant="contained">Official Site</Button>
            <Button startIcon={<TwitterIcon />} variant="contained">
              @yuiponpics
            </Button>
            <Button variant="contained">showroom</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
