import { useState, useEffect } from "react";
import { getData } from "../services/api";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getData(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
