"use client";
import { SearchFiltering } from "@/modules/search/SearchFiltering/SearchFiltering";
import { SearchResultsPage } from "@/modules/search/SearchResultsPage/SearchResultsPage";
import { Searchbar } from "@/modules/search/Searchbar/Searchbar";

export default function SearchPage() {
  return (
    <div className="mb-24">
      <Searchbar />
      <SearchFiltering />
      <div className="flex flex-col items-center justify-center">
        <SearchResultsPage itemsPerPage={8} />
      </div>
    </div>
  );
}
