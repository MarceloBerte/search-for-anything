"use client";

import Link from "next/link";
import { useContext } from "react";
import { StoreContext } from "@/context/store";

import styles from "./page.module.css";
import PaginationComponent from "@/components/pagination";

export default function Search() {
  const { state } = useContext(StoreContext);

  if(!state.articles.length && state.query) { 
    return (
      <section className={`${styles.section} ${styles['no-results']}`}>
        <p>No articles found for "<strong>{ state.query }</strong>"</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <PaginationComponent />
      <article>
        {
          state.articles
          .filter(article => article.author)
          .map((article, index) => (
            <div className={styles['short-article']} key={index}>
              <small>{article.author}</small>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link href={article.url} target="_blank">Read more</Link>
            </div>
          ))
        }
      </article>
      <PaginationComponent />
    </section>
  );
}
