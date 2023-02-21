import { useCallback } from "react";
import api from "../api";
const path = "premierleague/news";

function useNews() {
  const getNews = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getNews };
}

export default useNews;