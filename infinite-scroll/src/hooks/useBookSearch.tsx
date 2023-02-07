import axios, { Canceler } from "axios";
import { useEffect } from "react";

export default function useBookSearch(query: string, pageNumber: number) {
  useEffect(() => {
    let cancel: Canceler;
    axios({
      method: "GET",
      url: "https://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [query, pageNumber]);
  return null;
}
