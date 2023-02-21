import { useCallback } from "react";
import api from "../api";
const path = "premierleague/results";

function useResults() {
  const getResults = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getResults };
}

export default useResults;