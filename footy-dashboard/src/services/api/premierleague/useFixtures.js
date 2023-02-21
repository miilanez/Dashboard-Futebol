import { useCallback } from "react";
import api from "../api";
const path = "premierleague/fixtures";

function useFixtures() {
  const getFixtures = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getFixtures };
}

export default useFixtures;
