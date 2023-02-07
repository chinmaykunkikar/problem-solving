import { useState } from "react";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  useBookSearch(query, pageNumber);
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPageNumber(12);
  }

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Start typing a query"
        onChange={handleSearch}
      />
      <div>sometext</div>
      <div>Loading...</div>
      <div>Error</div>
    </>
  );
}
