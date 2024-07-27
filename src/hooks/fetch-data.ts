
import { StoreContext } from "@/context/store";
import { useRouter} from "next/navigation";
import { useContext } from "react";

export function useFetch() {
  const { state, setState } = useContext(StoreContext);
  const router = useRouter();

  async function getData (query: string, page: string = '1') {
    const url = 'https://newsapi.org/v2/top-headlines';
    const queryParams = new URLSearchParams();
    
    queryParams.append('q', query);
    queryParams.append('pageSize', state.pageItensAmount.toString());
    queryParams.append('page', page);

    const request = await fetch(`${url}?${queryParams}`, {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      }
    });
    const response = await request.json();
    
    router.replace(`/?q=${query}&page=${page}`);

    setState((state) => ({ ...state, query, articles: response.articles, page, totalResults: response.totalResults }));
  }

  return { getData };
}