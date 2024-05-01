'use client';

import Image from "next/image";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

console.log(searchClient);
export default function Home() {
  return (
    <main className="p-10">
      <h1 className="large">Algolia Test</h1>

      <InstantSearch indexName="bestbuy" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>

    </main>
  );
}
