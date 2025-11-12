import React, { useState,useEffect } from 'react';
import './App.css';
import ApiDataSource_impl from './components/ApiDataSource';
import { fetchBaconIpsum } from './services/baconService';
import { analyzeText } from './services/textAnalysisService';
import { getWordFrequencies } from './services/textAnalysisService';
import { WordFrequencyChart } from './components/WordFrequencyChart';
import { TopWordsTable } from './components/TopWordsTable';



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
      <h1>Test / Front</h1>
      <h3>Text, graph and table generator</h3>
      <ApiDataSource_impl
        data={data}
        stats={stats}
        onGenerate={handleGenerate}
        onClear={handleClear}
      />
      <WordFrequencyChart freqDict={freqDict} />
      <TopWordsTable freqDict={freqDict} />
      

    </div>
  );
}

export default App;
