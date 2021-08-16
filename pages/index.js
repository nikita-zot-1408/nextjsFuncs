import { useEffect, useState } from "react";

import CoinInfo from "../components/CoinInfo/CoinInfo";
import Header from "../components/Header/Header";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets?limit=15")
      .then((res) => res.json())
      .then((result) => setCoins(result.data));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {coins.map((coin) => {
          return <CoinInfo coinInfo={coin} key={coin.name} />;
        })}
      </div>
    </>
  );
}
