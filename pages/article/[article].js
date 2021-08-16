import React, { useRef, useEffect } from "react";

import Header from "../../components/Header/Header";
import CurrentArticleGoBack from "../../components/CurrentArticleComps/CurrentArticleGoBackBtn/CurrentArticleGoBack";

import styles from "../../styles/CurrentArticle.module.css";

export default function Article({ data }) {
  const articleDescRef = useRef();
  const { thumbnail, text, title, description } = data[0];

  useEffect(() => {
    if (articleDescRef.current) {
      articleDescRef.current.innerHTML = text;
    }
  }, [articleDescRef.current]);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <img
          src={thumbnail}
          alt={"Article Image"}
          className={styles.imageContainer}
        />
        <CurrentArticleGoBack additionalInfo={data[0]} />
        <p className={styles.articleTitle}>{title}</p>
        <p className={styles.briefDescription}>{description}</p>
        <div className={styles.descContainer} ref={articleDescRef}>
          {text}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const api = await fetch(
    `http://mearsy-backend.herokuapp.com/newsApi/getGlobalBroadcastNews?page=1&limit=35`
  );
  const result = await api.json();

  const paths = result.map((news) => {
    return { params: { article: news._id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const articleId = context.params.article;
  const api = await fetch(
    `http://mearsy-backend.herokuapp.com/newsApi/findCurrentNews?data=${articleId}&text=true&type=id`
  );
  const result = await api.json();

  return {
    props: {
      data: result,
    },
  };
}
