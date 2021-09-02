import React from 'react';
import './App.css';

const token = process.env.REACT_APP_BEARER_TOKEN;
// const endpoint = "https://api.twitter.com/2/tweets?ids=";
const endpoint = 'https://api.twitter.com/2/users/2244994946';

const App: React.FC = () => {
  const getData = async () => {
    try {
      const res = await fetch(endpoint, {
        method: 'GET',
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(getData());
  return <></>;
};

export default App;
