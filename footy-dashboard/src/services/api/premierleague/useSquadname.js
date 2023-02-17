import { useCallback } from "react";
import api from "./api";
const path = "premierleague/squadname/";

function useSquadname() {
  const getSquadname = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getSquadname };
}

export default useSquadname;