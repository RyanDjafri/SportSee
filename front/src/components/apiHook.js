import { useState, useEffect } from "react";
//todo message d'erreur en cas d'insiponibilité d'API
function ApiHook(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
    return () => {};
  }, [url]);

  return { data, error };
}

export default ApiHook;
