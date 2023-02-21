import { useCallback } from "react";
import api from "../api";
const path = "premierleague/transfers";

function useTransfers() {
  const getTransfers = useCallback(async () => {
    try {
      const options = await api.get(path);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return { getTransfers };
}

export default useTransfers;