import React, { useRef } from "react";
import "./App.css";
import axios from "axios";

let url = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-api`;

const App: React.FC = () => {
  const button = useRef(null);
  const fetchData = async () => {
    await axios
      .get(url, {
        params: {
          name: "developer_japan"
        }
      })
      .then((data) => {
        console.log(data.data);
      });
  };
  return (
    <>
      <p>result</p>
      <button type="button" ref={button} onClick={fetchData}>
        push here
      </button>
    </>
  );
};

export default App;
