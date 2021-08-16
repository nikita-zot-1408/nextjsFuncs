import React from "react";

import Link from "next/link";

import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <p className={styles.urlTitle}>Home</p>
      </Link>
      <Link href="/Articles">
        <p className={styles.urlTitle}>Articles</p>
      </Link>
      <Link href="/SignIn">
        <p className={styles.urlTitle}>Sign In</p>
      </Link>
    </div>
  );
}
