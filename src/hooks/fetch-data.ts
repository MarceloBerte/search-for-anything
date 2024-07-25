
import { StoreContext } from "@/context/store";
import { useRouter} from "next/navigation";
import { useContext } from "react";

export function useFetch() {
  const { state, setState } = useContext(StoreContext);
  const router = useRouter();

  async function getData (query: string, page: string = '1') {
    const request = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&pageSize=${state.pageItensAmount}&page=${page}&apiKey=046349d682da47b1abedeb9ae792445e`);
    const response = await request.json();
    
    router.replace(`/?q=${query}&page=${page}`);

    setState((state) => ({ ...state, query, articles: response.articles, page, totalResults: response.totalResults }));
  }

  return { getData };
}