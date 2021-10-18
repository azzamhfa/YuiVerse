import React from "react";
import styles from "./Blogs.module.scss";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Slide } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { Carousel } from "react-responsive-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Slider from "react-slick";
import { style, textAlign } from "@mui/system";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Blogs({ data }) {
  return (
    <div className={styles.blogs} id="blogs">
      <div className={styles.headline}>
        <h1>Kobayashi Yui Latest Translated Blogs</h1>
      </div>
      {/* <ArrowBackIosNewIcon className={`${styles.arrow} ${styles.left}`} /> */}
      <div className={styles.container}>
        <div className={styles.card}>
          {/* <Carousel className={styles.carousel} centerMode={true}> */}
          {data.posts.slice(0, 4).map((items, index) => (
            <Card
              className={styles.ccard}
              sx={{
                boxShadow: "10px 10px 26px 1px rgba(0,0,0,0.49);",
                borderRadius: "15px",
              }}
              key={index}
            >
              <CardMedia className= {styles.img}
                component="img"
                height="150"
                image={items.cover}
                alt={index}
              />
              <div style={{ margin: "10px" }}>
                <CardContent>
                  <h3 onClick={() => window.open(items.linkSaku)}>
                    {items.title}
                  </h3>
                  <p>{items.spoiler}</p>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => window.open(items.linkSaku)}
                  >
                    Read More...
                  </Button>
                </CardActions>
              </div>
            </Card>
          ))}
          {/* </Carousel> */}
        </div>
      </div>
      {/* <ArrowForwardIosIcon className={`${styles.arrow} ${styles.right}`}/> */}
    </div>
  );
}
