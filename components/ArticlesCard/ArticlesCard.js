import React from "react";

import styles from "../../styles/ArticlesCard.module.css";

import Link from "next/link";

export default function ArticlesCard({ cardInfo }) {
  return (
    <Link href={"/article/" + cardInfo._id}>
      <div className={styles.mainContainer}>
        <img
          src={cardInfo.thumbnail}
          alt={"Card image"}
          className={styles.image}
        />
        <div className={styles.container}>
          <p className={styles.containerTitle}>{cardInfo.title}</p>
          <p className={styles.contaierText}>{cardInfo.description}</p>
        </div>
      </div>
    </Link>
  );
}
