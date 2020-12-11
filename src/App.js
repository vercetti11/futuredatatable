import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    )
      .then(res => res.json())
      .then(data => setData(data.widget.data.offers));
  }, []);
  return (
    <div className="App">
      <p>Hi</p>
      {data.map(offer => (
        <div style={{ marginBottom: 16 }} key={offer.id}>
          {JSON.stringify(offer)}
        </div>
      ))}
    </div>
  );
}

export default App;
