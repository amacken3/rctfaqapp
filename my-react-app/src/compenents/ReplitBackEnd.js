import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReplitBackEnd = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://a380f5d3-e346-4418-b553-8fcb94b58abb-00-27t0ygvm20l2a.riker.replit.dev/your-endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ReplitBackEnd;
