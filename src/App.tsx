import React from "react";
import "./App.css";

const App: React.FC = () => {
  const handleFetchData = () => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.twitter.com/2/tweets/1275828087666679809?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld"
      );
      return data;
    };
    console.log(fetchData);
    return fetchData;
  };
  return (
    <div className="App">
      <button onClick={() => handleFetchData()}>結果を見る</button>
    </div>
  );
};

export default App;
