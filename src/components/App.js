// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogData, setDogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const result = await response.json();
        setDogData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dog data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogData.message} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
