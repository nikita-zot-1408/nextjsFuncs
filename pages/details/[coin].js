import React from "react";

import Header from "../../components/Header/Header";

import styles from "../../styles/Details.module.css";

export default function Coin({ coin }) {
  const createCap = (cap) => {
    const sum = cap.split(".")[0].toString();

    if (sum.length > 9) {
      return `${(sum / 1000000000).toFixed(2)}b`;
    }
    if (sum.length > 6 && sum.length < 10) {
      return `${(sum / 1000000).toFixed(2)}m`;
    }
    return sum;
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>Welcome to {coin.name} details</p>
        <div>
          <p className={styles.infoText}>
            Market Cap: {createCap(coin.marketCapUsd)}
          </p>
          <p className={styles.infoText}>
            VWAP 24H: {+(+coin.vwap24Hr).toFixed(2)}%
          </p>
          <p className={styles.infoText}>Supply: {createCap(coin.supply)}</p>
          <p className={styles.infoText}>
            Volume: {createCap(coin.volumeUsd24Hr)}
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const api = await fetch("http://api.coincap.io/v2/assets?limit=15");
  const apiResult = await api.json();
  const paths = apiResult.data.map((coins) => {
    return { params: { coin: coins.id } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const coinId = context.params.coin;
  const api = await fetch(`http://api.coincap.io/v2/assets/` + coinId);
  const apiResult = await api.json();
  return {
    props: { coin: apiResult.data },
  };
}
