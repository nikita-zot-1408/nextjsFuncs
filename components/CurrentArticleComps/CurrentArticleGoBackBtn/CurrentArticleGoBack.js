import React from "react";

import styles from "../../../styles/GoBack.module.css";

import { FiChevronLeft } from "react-icons/fi";

import dayjs from "dayjs";
import Link from "next/link";

export default function CurrentArticleGoBack({ additionalInfo }) {
  const formatedDate = dayjs(additionalInfo.date).format("D MMMM, YYYY");
  return (
    <Link href={"/Articles"}>
      <div className={styles.mainCont}>
        <button className={styles.backBtn}>
          <FiChevronLeft />
        </button>
        <div className={styles.briefInfoCont}>
          <p className={styles.dateImgText}>
            {formatedDate} / Image:Kevin Philips{" "}
          </p>
          <p className={styles.authorTxt}>{additionalInfo.author}</p>
        </div>
      </div>
    </Link>
  );
}
