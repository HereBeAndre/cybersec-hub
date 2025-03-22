import axios from "axios";
import { Vulnerability } from "../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0";

export interface ResponseBody {
  format: string;
  resultsPerPage: number;
  startIndex: number;
  timestamp: string;
  totalResults: number;
  version: string;
  vulnerabilities: Vulnerability[];
}

export const useSearchQuery = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const [data, setData] = useState<ResponseBody | null>(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const url = new URL(BASE_URL);
    if (searchQuery) {
      url.searchParams.append("cpeName", searchQuery);
      const fetchData = async () => {
        const response = await axios.get<ResponseBody>(url.toString());
        setData(response.data);
      };

      fetchData();
    }
  }, [searchQuery]);

  //   if (response.status !== 200) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }

  return {
    data,
    // status: response.status,
  };
};
