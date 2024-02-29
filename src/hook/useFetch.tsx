import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const req = await fetch(url);
        if (req.status !== 200) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error);
        setData(null);
        setLoading(false);
      }
    }
    getData();
  }, [url]);
  return { data, error, loading };
}
