import React, { useRef } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

// const token = process.env.REACT_APP_BEARER_TOKEN;
// const endpoint = "https://api.twitter.com/2/tweets?ids=";
// const endpoint = 'https://api.twitter.com/2/users/2244994946';

const App: React.FC = () => {
  const [state, setState] = useState('');
  const button = useRef(null)
  const fetchData = async() => {
    await axios.get(
      "https://yesno.wtf/api"
    )
    .then((data) => {
      setState(data.data.answer)
      console.log(data.data.answer)
    })
  }
  return (
    <>
      <p>result: {state}</p>
      <button type="button" ref={button} onClick={fetchData}>push here</button>
    </>
  )
};

export default App;
