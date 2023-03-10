import { useCallback } from "react";
import api from "../api";
const path = "bundesliga";

function useBundesliga() {
  const getStandings = useCallback(async () => {
    try {
      const options = await api.get(`${path}/table`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getNews = useCallback(async () => {
    try {
      const options = await api.get(`${path}/news`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getResults = useCallback(async () => {
    try {
      const options = await api.get(`${path}/results`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getFixtures = useCallback(async () => {
    try {
      const options = await api.get(`${path}/fixtures`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getSquadname = useCallback(async (team) => {
    try {
      const options = await api.get(`${path}/table/squadname/${team}`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getTransfers = useCallback(async () => {
    try {
      const options = await api.get(`${path}/transfers`);
      return options.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  return {
    getStandings,
    getNews,
    getTransfers,
    getSquadname,
    getFixtures,
    getResults,
  };
}

export default useBundesliga;
