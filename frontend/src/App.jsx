import React, { useState } from "react";
import axios from "axios";
import ApiGet from "./example/ApiGet";
import Fetchheaders from "./example/Fetchheaders";
const App = () => {
  const [myfile, setMyfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const upload = async () => {
    try {
      setLoading(true);
      setError(false);
      const formData = new FormData();
      formData.append("myfile", myfile);
      const response = await axios.post("/api/upload", formData);
      setData(response.data);

      // const response = await fetch("/api/upload", {
      //   method: "POST",
      //   body: formData,
      // });

      // const result = await response.json();
      // setData(result);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      setLoading(true);
      setError(true);
      console.log(error);
    }
  };
  if (error) return <h1>Something went wrong...</h1>;
  if (loading) return <h1>loading.....</h1>;
  return (
    <div>
      <input
        type="file"
        placeholder="select the file "
        onChange={(e) => setMyfile(e.target.files[0])}
      />
      <button type="button" onClick={upload}>
        Upload
      </button>

      {data ? (
        <div>
          <a
            href={`${data.data.secure_url}`}
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.data.secure_url}
          </a>
          <br />
        </div>
      ) : (
        <h1>Nothing Yet Uploaded</h1>
      )}
      <ApiGet />
     <Fetchheaders/>
    </div>
  );
};

export default App;
