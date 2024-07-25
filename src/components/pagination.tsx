import { StoreContext } from "@/context/store";
import { useContext } from "react";

import styles from "./pagination.module.css";

export default function PaginationComponent () {
  const { state } = useContext(StoreContext);

  const { pageItensAmount, totalResults, page } = state;
console.log(totalResults);
  if(!totalResults) return;

  const totalPages = Math.ceil(parseInt(totalResults) / pageItensAmount);

  if(totalPages === 1) return;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className={styles.list}>
      {
        pages.map((p, i) => {
        return (
          <li key={i}>
            <a 
              className={`${page && parseInt(page) === p ? styles.active : ''}`}
              href={`/?q=${state.query}&page=${p}`}>
              {p}
            </a>
          </li>
        )
      })
    }
    </ul>
  )
}
