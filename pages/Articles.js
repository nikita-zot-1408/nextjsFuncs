import React from "react";
import Header from "../components/Header/Header";
import ArticlesCard from "../components/ArticlesCard/ArticlesCard";
export default function Articles({ data }) {
  return (
    <>
      <Header />
      <div>
        {data.map((news) => {
          return <ArticlesCard key={news._id} cardInfo={news} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const api = await fetch(
    `http://mearsy-backend.herokuapp.com/newsApi/getGlobalBroadcastNews?page=1&limit=35`
  );
  const result = await api.json();
  return {
    props: { data: result },
  };
}
