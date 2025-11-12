import React, { useState,useEffect } from 'react';
import './App.css';
import ApiDataSource_impl from './components/ApiDataSource';
import { fetchBaconIpsum } from './services/baconService';
import { analyzeText } from './services/textAnalysisService';
import { getWordFrequencies } from './services/textAnalysisService';
import { WordFrequencyChart } from './components/WordFrequencyChart';



function App() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ words: 0, characters: 0, paragraphs: 0 });
  const [freqDict, setFreqDict] = useState({});

  const handleGenerate = async (paragraphs, startWithLorem) => {
    const result = await fetchBaconIpsum(paragraphs, startWithLorem);
    setData(result);

    const statsResult = analyzeText(result);
    setStats(statsResult);

    const freq = getWordFrequencies(result);
    setFreqDict(freq);
  
  };



  const handleClear = () => {
    setData([]);
    setStats({ words: 0, characters: 0, paragraphs: 0 });
    setFreqDict({});
  };

  return (
    <div className="App">
      <h1>Word Frequency Counter</h1>
      <ApiDataSource_impl
        data={data}
        stats={stats}
        onGenerate={handleGenerate}
        onClear={handleClear}
      />
      <WordFrequencyChart freqDict={freqDict} />
      

    </div>
  );
}

export default App;
