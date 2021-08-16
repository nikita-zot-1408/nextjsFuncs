import React from "react";

import Link from "next/link";

import styles from "../../styles/CoinInfo.module.css";

export default function CoinInfo({ coinInfo }) {
  return (
    <Link href={"/details/" + coinInfo.id}>
      <div className={styles.container}>
        <p className={styles.nameText}>{coinInfo.name}</p>
        <button className={styles.detailsButton}>Details</button>
      </div>
    </Link>
  );
}
