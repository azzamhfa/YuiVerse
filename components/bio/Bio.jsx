import styles from "./Bio.module.scss";
// import "./carousel.css";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TwitterIcon from "@mui/icons-material/Twitter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WebIcon from "@mui/icons-material/Web";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import pp1 from "../../public/profile1.jpg";
import { useState } from "react";
import { textAlign } from "@mui/system";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function Bio() {
  const [counter, setCounter] = useState(0);
  const photos = [
    { pics: "/profile1.jpg", capt: "©Seed&Flower LLC - Nagaredama 2021" },
    {
      pics: "https://sakurazaka101.com/wp-content/uploads/2021/03/Kobayashi.jpg",
      capt: "©Seed&Flower LLC - Ban 2021",
    },
    {
      pics: "https://sakurazaka101.com/wp-content/uploads/2021/03/KobayashiYui-scaled.jpg",
      capt: "©Seed&Flower LLC - Nobody's Fault 2020",
    },
  ];
  const itemClicked = (action, object) => {
    setCounter(action);
  };
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };
  return (
    <div className={styles.bio}>
      <div className={styles.left}>
        <img src={photos[counter].pics} alt="" />
        <p>{photos[counter].capt}</p>

        <div className={styles.gallery}>
          <h3>Gallery</h3>

          <Carousel
            onClickItem={itemClicked}
            animationHandler="fade"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <ArrowBackIosNewIcon
                  onClick={onClickHandler}
                  style={{ ...arrowStyles, left: 250 }}
                />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <ArrowForwardIosIcon
                  onClick={onClickHandler}
                  style={{ ...arrowStyles, right: 250 }}
                />
              )
            }
          >
            {photos.map((data) => (
              <div>
                <img src={data.pics} alt={data.capt} />
                <p>{data.capt}</p>
              </div>
            ))}
          </Carousel>
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
            <Carousel
              width="60%"
              animationHandler="fade"
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              // showArrows={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev}
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <ArrowForwardIosIcon
                    onClick={onClickHandler}
                    style={{ ...arrowStyles, right: 0 }}
                  />
                )
              }
            >
              <div style={{ textAlign: "justify", paddingRight: "30px", marginRight: "30px", marginBottom: "30px"}} alt="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies sodales est, at feugiat massa. Vestibulum cursus
                pellentesque leo, vitae consequat elit. Proin faucibus, massa et
                suscipit interdum, dolor felis fermentum nibh, vitae lacinia
                risus enim eu nulla. Nullam viverra dictum turpis scelerisque
                laoreet. Nulla varius leo a lobortis scelerisque. Vestibulum a
                risus commodo turpis venenatis blandit id quis lorem. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aliquam dignissim, lectus quis tincidunt
                placerat, massa nibh vulputate risus, et pharetra justo dui sit
                amet mauris. Etiam ultrices eleifend est, nec sagittis turpis
                ornare eget.
              </div>
              <div style={{ textAlign: "justify" }} alt="1">Ini content 2</div>
            </Carousel>
          </div>
          <div className={styles.media}>
            <h2>Media Links</h2>
            <Button startIcon={<WebIcon />} variant="contained">
              Official Site
            </Button>
            <Button startIcon={<TwitterIcon />} variant="contained">
              @yuiponpics
            </Button>
            <Button startIcon={<LiveTvIcon />} variant="contained">
              showroom
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
