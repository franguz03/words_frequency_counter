import React, { useEffect } from 'react';
import { fetchBaconIpsum } from './services/baconService';

function App() {
  useEffect(() => {
    async function testFetch() {
      const data = await fetchBaconIpsum(2, true);
      console.log('text:', data);
    }
    testFetch();
  }, []);

  return (
    <div className="App">

        <h1>Word Frequency Counter</h1>

    </div>
  );
}

export default App;
