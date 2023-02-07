import { useCallback, useRef, useState } from "react";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver>();
  const lastBookElRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPgNo) => prevPgNo + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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
        value={query}
        onChange={handleSearch}
      />
      {books?.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElRef} key={book}>
              {book}
            </div>
          );
        }
        return <div key={book}>{book}</div>;
      })}
      <div>{loading ? "Loading..." : ""}</div>
      <div>{error ? "Error" : ""}</div>
    </>
  );
}
