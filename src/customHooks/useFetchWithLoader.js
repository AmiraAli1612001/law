"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openLoader } from "@/globalState/Features/tempDataSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { lazyCloseLoader } from "@/helperFunctions/lazy";

const useFetchWithLoader = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    //todo: delete log
    console.log(signal);


    const fetchData = async () => {
      setLoading();
      dispatch(openLoader());
      try {
        const response = await fetchWithCheck(url, { ...options, signal });
        setData(response);

        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", err);
          setError(err);
        }
      } finally {
        setLoading(false);
        lazyCloseLoader();
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup on unmount
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetchWithLoader;
