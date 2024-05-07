"use client";

import Image from "next/image";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
} from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_KEY,
);

function Hit({ hit }) {
  return (
    <div className="stats shadow auto m-2 w-full">
      <div class="stat">
        <div class="stat-title">{hit.city}</div>
        <div class="stat-value">{hit.iata_code}</div>
        <div class="stat-desc">{hit.name}</div>
      </div>
    </div>
  );
}

<InstantSearch indexName="dev_airports" searchClient={searchClient} insights>
  <SearchBox />
  <Hits hitComponent={Hit} />
</InstantSearch>;

console.log(searchClient);
export default function Home() {
  return (
    <main>
      <div class="navbar bg-neutral text-neutral-content p-2">
        <div class="text-xl flex-1 font-bold">Algolia Test</div>
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://github.com/bridgpal.png" />
          </div>
        </div>
      </div>
      <div className="m-10">
        <input type="text" id="search" />
        {/* <label class="input input-bordered flex items-center gap-2 w-64 ">
        <input type="text" class="grow" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
      </label> */}

        <InstantSearch
          indexName="dev_airports"
          searchClient={searchClient}
          insights
        >
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </main>
  );
}
