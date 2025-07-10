import { useEffect, useState } from "react";
import axios from "axios";

export const useApi = (apiUrl, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(apiUrl, {
        params: params,
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [load, data, err];
};
