"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./search-bar.module.css";
import { useFetch } from "../hooks/fetch-data";

export default function SearchBarComponent() {
  const params = useSearchParams();
  const { getData } = useFetch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget['search'].value;
    if(!query) return;
    getData(query, '1');
  }

  useEffect(() => {
    if(!params.get('q')) return;
    getData(params.get('q') || '', params.get('page') || '1');   
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="search" placeholder="Search for a therm" />
      <button type="submit">Search</button>
    </form>
  );
};
