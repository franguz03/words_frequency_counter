import React, { useState } from 'react';
import '../styles/ApiDataSource.css';

function ApiDataSource_impl({ data, stats, onGenerate, onClear }) {
  const [paragraphs, setParagraphs] = useState(1);
  const [startWithLorem, setStartWithLorem] = useState(false);

  const handleGenerateClick = () => {
    onGenerate(paragraphs, startWithLorem);
  };

  return (
    <div className="api-datasource-container">
      <h2>API DataSource</h2>

      {/* Controles */}
      <div className="controls">
        <label>
          #Paragraphs:
          <input
            type="number"
            min="1"
            value={paragraphs}
            onChange={(e) => setParagraphs(Number(e.target.value))}
          />
        </label>

        <label>
          Start with lorem:
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
          />
        </label>

        <button onClick={handleGenerateClick}>Generate</button>
      </div>

      {/* Estadísticas */}
      <div className="stats">
        <div>
          <h4>Words</h4>
          <p>{stats.words}</p>
        </div>
        <div>
          <h4>Characters</h4>
          <p>{stats.characters}</p>
        </div>
        <div>
          <h4>Paragraphs</h4>
          <p>{stats.paragraphs}</p>
        </div>
      </div>

      {/* Texto */}
      <div className="text-output">
        {data.length > 0 ? (
          data.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>Generate some text</p>
        )}
      </div>

      {/* Botón Clear */}
      {data.length > 0 && (
        <button onClick={onClear} className="clear-button">
          Clear
        </button>
      )}
    </div>
  );
}

export default ApiDataSource_impl;
