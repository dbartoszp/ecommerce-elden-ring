"use client";
import { SearchResultsPage } from "@/modules/search/SearchResultsPage/SearchResultsPage";
import { Searchbar } from "@/modules/search/Searchbar/Searchbar";

export default function SearchPage() {
  return (
    <div className="mb-24">
      <Searchbar />
      <div className="flex flex-col items-center justify-center">
        <SearchResultsPage itemsPerPage={10} />
      </div>
    </div>
  );
}
