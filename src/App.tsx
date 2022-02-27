import React, { useRef } from 'react';
import './App.css';
import axios from 'axios';

const url = "https://3yebf39eia.execute-api.ap-northeast-1.amazonaws.com/production/twitter-api"

const App: React.FC = () => {
  const button = useRef(null)
  const fetchData = async() => {
    await axios.get(
      url,
      {
        params: {
          name: "developer_japan"
        }
      }
    )
    .then((data) => {
      console.log(data.data)
    })
  }
  return (
    <>
      <p>result</p>
      <button type="button" ref={button} onClick={fetchData}>push here</button>
    </>
  )
};

export default App;
