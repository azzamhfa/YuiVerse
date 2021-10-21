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

export default function Bio() {
  const [counter, setCounter] = useState(0);
  const photos = [
    {
      id: 0,
      pics: "/profile1.jpg",
      capt: "©Seed&Flower LLC - Nagaredama 2021",
    },
    {
      id: 1,
      pics: "https://sakurazaka101.com/wp-content/uploads/2021/03/Kobayashi.jpg",
      capt: "©Seed&Flower LLC - Ban 2021",
    },
    {
      id: 2,
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
    <div className={styles.bio} id="bio">
      <div className={styles.left}>
        <div className={styles.container__left}>
          <img src={photos[counter].pics} alt="" />
          <p>{photos[counter].capt}</p>
          <div className={styles.gallery}>
            <h3>Gallery</h3>
            <p>( Click to Preview )</p>

            <div
              className={styles.containers}
              style={{
                overflow: "hidden",
              }}
            >
              <Carousel
                className={styles.carousel}
                // width={checkSize()}
                onClickItem={itemClicked}
                animationHandler="fade"
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <ArrowBackIosNewIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles, left: 0 }}
                    />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <ArrowForwardIosIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles, right: 0 }}
                    />
                  )
                }
              >
                {photos.map((data) => (
                  <div key={data.id}>
                    <img src={data.pics} alt={data.capt} />
                    <p>{data.capt}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.container__right}>
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
                className={styles.carousel}
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
                <div
                  style={{
                    width: "80%",
                    textAlign: "justify",
                  }}
                  alt="1"
                >
                  Because of her sadistic character on stage, especially during
                  performances of Abunakkashii Keikaku, so she is sometimes
                  called &quotMad Dog (狂犬)&quot.
                </div>
                <div
                  style={{
                    width: "80%",
                    textAlign: "justify",
                  }}
                  alt="1"
                >
                  Besides her sadistic character on stage, when off stage she is
                  unexpectedly clingy
                </div>
                <div
                  style={{
                    width: "80%",
                    textAlign: "justify",
                  }}
                  alt="1"
                >
                  Test
                </div>
              </Carousel>
            </div>
            <div className={styles.media}>
              <h2>Media Links</h2>
              <Button
                startIcon={<WebIcon />}
                onClick={() =>
                  window.open(
                    "https://sakurazaka46.com/s/s46/artist/07?ima=4956"
                  )
                }
                variant="contained"
              >
                Official Site
              </Button>
              <Button
                startIcon={<TwitterIcon />}
                onClick={() => window.open("https://twitter.com/yuiponpics")}
                variant="contained"
              >
                @yuiponpics
              </Button>
              <Button
                startIcon={<LiveTvIcon />}
                onClick={() =>
                  window.open("https://www.showroom-live.com/46_YUI_KOBAYASHI")
                }
                variant="contained"
              >
                showroom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
