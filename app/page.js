"use client";

import Image from "next/image";
import Link from "next/link";

import { Button, Input } from "@/components/ui/input";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  useConnector,
} from "react-instantsearch";

const searchClient = algoliasearch(
  "X4IKBG6VTM",
  "e0effa6083f773b37212a27840008405",
);

function HitComponent({ hit }) {
  console.log(hit);
  return (
    // <TableRow>
    //   <TableCell>{hit.iata_code}</TableCell>
    //   <TableCell>{hit.city}</TableCell>
    //   <TableCell>{hit.name}</TableCell>
    // </TableRow>
    <div className="bg-white dark:bg-gray-900 rounded-md shadow-sm flex items-center gap-4 p-4">
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{hit.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
          {hit.city}, {hit.country}
        </p>
      </div>
      <div className="font-extrabold text-4xl border rounded-md px-4 py-2 text-gray-900 dark:text-gray-50 font-mono">
        {hit.iata_code}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <InstantSearch
        indexName="dev_airports"
        searchClient={searchClient}
        insights
      >
        <Hits hitComponent={HitComponent} className="ais-Hits-list" />
      </InstantSearch>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
