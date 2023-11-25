import { useEffect, useState } from "react";
import axios from 'axios';
const Fetchheaders = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
    //   const response = await fetch("/api/get", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ num: num }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   const result = await response.json();
    const x = { num: 75 };
    const response = await axios.post('/api/get', x);
    console.log(response.data.msg); // Access the data property of the response
    setData(response.data.msg);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <h1>ram</h1>
      {data && <h1>{data}</h1>}
      <button onClick={handleClick}>OK</button>
    </>
  );
};

export default Fetchheaders;
