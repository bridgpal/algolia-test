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
    <div className="bg-white dark:bg-gray-900 rounded-md shadow-sm flex items-center gap-4 p-4 mb-5">
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
      <header className="bg-gray-900 text-white py-4 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <span className="text-lg font-semibold">Algolia Test</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {/* <Link
              className="hover:underline flex items-center gap-2"
              href="https://github.com/bridgpal/algolia-test"
            >
              <GithubIcon className="h-5 w-5" />
              Github
            </Link> */}
          </nav>
        </div>
      </header>
      <div className="bg-gray-100 dark:bg-gray-950 py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <InstantSearch
            indexName="dev_airports"
            searchClient={searchClient}
            insights
          >
            <SearchBox
              classNames={{
                root: "flex items-center mb-6",
                form: "relative flex-1",
                input:
                  "w-full bg-white dark:bg-gray-900 pl-12 pr-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
                submitIcon:
                  "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400",
                resetIcon: "hidden",
                placeholder: "Search for Airports...",
              }}
            />
            <Hits hitComponent={HitComponent} className="ais-Hits-list" />
          </InstantSearch>
        </div>
      </div>
    </>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
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

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
