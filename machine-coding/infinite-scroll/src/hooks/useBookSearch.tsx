import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";

export default function useBookSearch(query: string, pageNumber: number) {
  const OPENLIBRARY_API_ENDPOINT = "https://openlibrary.org/search.json";

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [books, setBooks] = useState<string[] | undefined>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => setBooks([]), [query]);

  useEffect(() => {
    let cancel: Canceler;
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: OPENLIBRARY_API_ENDPOINT,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setLoading(false);
        setBooks((prevBooks: string[] | undefined) => {
          if (prevBooks)
            return [
              ...new Set([
                ...prevBooks,
                ...res.data.docs.map((book: any) => book.title),
              ]),
            ];
        });
        setHasMore(res.data.docs.length > 0);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}
