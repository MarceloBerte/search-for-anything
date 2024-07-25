"use client";

import React, { createContext, useState } from 'react';
import { Store } from '@/contracts/store';

const initialStore: Store = {
  state: { query: '', articles: [], pageItensAmount: 10 },
  setState: () => {},
};

export const StoreContext = createContext<Store>(initialStore);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ state, setState ] = useState(initialStore.state);
  
  console.info('Store:', state);
  
  return (<StoreContext.Provider value={{ state, setState }}>{children}</StoreContext.Provider>);
};
