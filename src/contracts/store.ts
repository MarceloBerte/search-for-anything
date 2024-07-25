import { Article } from "./article";

export interface StoreState {
  query: string;
  articles: Article[];
  pageItensAmount: number;
  page?: string;
  totalResults?: string;
}

export interface Store {
  state: StoreState;
  setState: React.Dispatch<React.SetStateAction<StoreState>>;
}
