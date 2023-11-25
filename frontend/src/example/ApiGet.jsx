import React, { useState, useEffect } from "react";
import axios from "axios";
const ApiGet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         setLoading(true);
  //         setError(false);
  //         const response = await axios.get(
  //           "https://dummyjson.com/products/categories"
  //         );
  //         const result = response.data; // Extract the array from the response
  //         setData(result);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(true);
  //         setLoading(true);
  //         console.log(error);
  //       }
  //     })();
  //   }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          "https://dummyjson.com/products/categories",
          { method: "GET" }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {/* Render your data here */}
      {data.map((item, id) => (
        <div key={id}>
          <p>{item}</p>
          {/* Add other properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default ApiGet;
