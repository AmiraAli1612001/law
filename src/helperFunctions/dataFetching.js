import { openLoader } from "@/globalState/Features/tempDataSlice";
import { store } from "@/globalState/store";
import { lazyCloseLoader } from "./lazy";

export const noCacheHeaders = {
  // 'Content-Type': 'application/json',
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  Pragma: "no-cache",
  Expires: "0",
  "Surrogate-Control": "no-store",
};

/**
 * Fetches a URL with optional caching and error handling.
 *
 * @param {string} url - The URL to fetch.
 * @param {object} [options={}] - Additional options to pass to the fetch request.
 * @param {any} [fallBack] - A fallback value to return if the fetch fails.
 * @param {boolean} [cashe] - wether to cache the response or not.
 * @return {Promise<any>} - A promise that resolves to the parsed JSON response or the response text.
 * @throws {Error} - If the fetch fails and no fallback value is provided.
 */
export async function fetchWithCheck(
  url,
  options = {},
  fallBack,
  cashe = false
) {
  if (typeof window !== "undefined") {
    store.dispatch(openLoader());
  }
  try {
    const headers = cashe ? { "": "" } : noCacheHeaders;
    const casheOption = cashe ? { "": "" } : { cache: "no-cache" };

    const response = await fetch(url, {
      ...casheOption,
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
      },
    });
    console.log("fetWCheck success");

    let data = await response.text();
    console.log(data);
    if (!response.ok) {
      let finalData;
      try {
        console.log(data);
        finalData = JSON.parse(data);
      } catch {
        finalData = data;
      } finally {
        throw finalData;
      }
    }

    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  } catch (error) {
    console.error("fetch with check catch");
    console.error(error);
    if (fallBack) return fallBack;
    throw error;
  } finally {
    if (typeof window !== "undefined") {
      lazyCloseLoader();
    }
  }
}

// home

export async function fetchHomeData() {
  const data = await fetchWithCheck(`/api/home/homeData`, null, null);
  return data;
}

// registeration - payment - basket

export async function fetchAddToBasket(data) {
  try {
    const addResult = await fetchWithCheck(
      `/api/reservations/addToBasket?tokenCourse=${data.tokenCourse}&tokenStudent=${data.tokenStudent}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(addResult);
    return addResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function fetchRegisterAttendanceCourse(data) {
  try {
    const courseDetails = await fetchWithCheck(
      `/api/reservations/addOfflineCourse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return courseDetails;
  } catch (error) {
    console.log(error);
    return error;
  }
}
