import React, { useState } from "react";
import styles from "./Disco.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { style } from "@mui/system";

import banner3 from "../../public/banner3.png";
export default function Disco() {
  const [status, setStatus] = useState(0);
  const gambar = ["./banner1.png", "./banner2.png", "./banner3.png"];
  const color = ["#F95F81", "#3E7F8C", "#7E0104"];
  const handleClick = (params) => {
    status === params ? setStatus(0) : setStatus(params);
  };
  return (
    <div
      className={styles.discography}
      style={{ backgroundImage: `url(${gambar[status]})` }}
      id="discography"
    >
      <div className={styles.left}>
        <div className={styles.content}>
          <div className={styles.headline}>
            <h1>DISCOGRAPHY</h1>
            <h2 style={{ color: `${color[status]}` }}>as Sakurazaka46</h2>
          </div>

          <div
            className={
              status === 0
                ? `${styles.dropdown} ${styles.active}`
                : styles.dropdown
            }
            onClick={() => {
              handleClick(0);
            }}
          >
            <div className={styles.head}>
              <h2>1st Single - Nobody&apos;s Fault</h2>
              <ArrowDropDownIcon
                className={styles.arrow}
                fontSize="large"
                sx={{ marginLeft: "40px" }}
              />
            </div>
            <ul>
              <li>Nobody&apos;s Fault</li>
              <li>Naze Koi wo Shite Konakattan darou?</li>
              <li>Hanshinhangi</li>
              <li>Plastic regret </li>
              <li>Saishuu no Chikatetsu ni Notte</li>
              <li>Buddies</li>
              <li>Blue moon kiss</li>
            </ul>
          </div>

          <div
            className={
              status === 1
                ? `${styles.dropdown} ${styles.active}`
                : styles.dropdown
            }
            onClick={() => {
              handleClick(1);
            }}
          >
            <div className={styles.head}>
              <h2>2nd Single - BAN</h2>
              <ArrowDropDownIcon
                className={styles.arrow}
                fontSize="large"
                sx={{ marginLeft: "40px" }}
              />
            </div>
            <ul>
              <li>BAN</li>
              <li>Guuzen no Kotae</li>
              <li>Sore ga Ai Nano ne </li>
              <li>Kimi to Boku to Sentakumono </li>
              <li>Microscope</li>
              <li>Omotta Yori mo Sabishikunai </li>
              <li>Sakurazaka no Uta </li>
            </ul>
          </div>

          <div
            className={
              status === 2
                ? `${styles.dropdown} ${styles.active}`
                : styles.dropdown
            }
            onClick={() => {
              handleClick(2);
            }}
          >
            <div className={styles.head}>
              <h2>3rd Single - Nagaredama</h2>
              <ArrowDropDownIcon
                className={styles.arrow}
                fontSize="large"
                sx={{ marginLeft: "40px" }}
              />
            </div>
            <ul>
              <li>Nagaredama</li>
              <li>Dead end</li>
              <li>Jamaica Beer</li>
              <li>Mugon no Uchuu </li>
              <li>Utsukushiki Nervous </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.right}></div>
    </div>
  );
}
