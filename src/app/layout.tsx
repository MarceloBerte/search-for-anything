import "../styles/globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/context/store";
import SearchBarComponent from "@/components/search-bar";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search for anything!",
  description: "Search for anything you want!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout}`}>
        <StoreProvider>
          <header>
            <h1>Search for anything!</h1>
            <SearchBarComponent />
          </header>
          <main>
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
