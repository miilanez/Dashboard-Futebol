import { useCallback } from "react";
import api from "./api";
const path = "premierleague/table";

function useStandings() {
  const getStandings = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getStandings };
}

export default useStandings;
