import React, { useState } from "react";
import styles from "./Disco.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { style } from "@mui/system";
export default function Disco() {
  const [status, setStatus] = useState(0);
  const handleClick = (params) => {
    status === params ? setStatus(0) : setStatus(params);
    console.log(status);
  };
  return (
    <div className={styles.discography}>
      <h2>DISCOGRAPHY</h2>
      <h1>as Sakurazaka46</h1>
      <div
        className={
          status === 0 ?  `${styles.dropdown} ${styles.active}` : styles.dropdown
        }
        onClick={() => {
          handleClick(0);
        }}
      >
        <div className={styles.head}>
          <h1>1st Single - Nobody's Fault</h1>
          <ArrowDropDownIcon
            className={styles.arrow}
            fontSize="large"
            sx={{ marginLeft: "40px" }}
          />
        </div>
        <ul>
          <li>Nobody's Fault</li>
        </ul>
      </div>

      <div
        className={
          status === 1 ?  `${styles.dropdown} ${styles.active}` : styles.dropdown
        }
        onClick={() => {
          handleClick(1);
        }}
        // onClick={() => {
        //   setStatus(1);
        // }}
      >
        <div className={styles.head}>
          <h1>2nd Single - BAN</h1>
          <ArrowDropDownIcon
            className={styles.arrow}
            fontSize="large"
            sx={{ marginLeft: "40px" }}
          />
        </div>
        <ul>
          <li>Nobody's Fault</li>
        </ul>
      </div>

      <div
        className={
          status === 2 ?  `${styles.dropdown} ${styles.active}` : styles.dropdown
        }
        onClick={() => {
          handleClick(2);
        }}
      >
        <div className={styles.head}>
          <h1>3rd Single - Nagaredama</h1>
          <ArrowDropDownIcon
            className={styles.arrow}
            fontSize="large"
            sx={{ marginLeft: "40px" }}
          />
        </div>
        <ul>
          <li>Nobody's Fault</li>
        </ul>
      </div>
    </div>
  );
}
