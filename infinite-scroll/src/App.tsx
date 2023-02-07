import { useState } from "react";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPageNumber(1);
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
      {books?.map((book) => {
        return <div key={book}>{book}</div>;
      })}
      <div>{loading ? "Loading..." : ""}</div>
      <div>{error ? "Error" : ""}</div>
    </>
  );
}
