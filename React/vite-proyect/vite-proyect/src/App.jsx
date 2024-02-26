import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomFact, setRandomFact] = useState('');
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomData = async () => {
      try {
        const Response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const Data = await Response.json();
        setRandomFact(Data.text);

        const imageResponse = await fetch('https://picsum.photos/200/300');
        const imageUrl = imageResponse.url;
        setRandomImageUrl(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomData();
  }, []);

  return (
    <>
      <h1>All Random</h1>
      {randomFact && <p>{randomFact}</p>}
      {randomImageUrl && (
        <img src={randomImageUrl} alt="random image" width={200} height={300} />
      )}
    </>
  );
}

export default App;