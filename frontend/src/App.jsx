import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [myfile, setMyfile] = useState(null);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("myfile", myfile);
      await axios.post("http://localhost:8000/upload", formData);
    } catch (error) {
      console.log(error);
    }
  };
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
    </div>
  );
};

export default App;
