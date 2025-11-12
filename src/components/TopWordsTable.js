import React from "react";
import { getTopWords } from "../services/textAnalysisService";
import '../styles/TopWordsTable.css';

export function TopWordsTable(props) {
  const {freqDict} = props;

  if (!freqDict || Object.keys(freqDict).length === 0) {
    return (
      <div className="top-words-container">
        <h2>Top 5 Words</h2>
        <table className="top-words-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Word</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="no-data-row">
              <td colSpan="3">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  const topWords = getTopWords(freqDict, 5);

  return (
    <div className="top-words-container">
      <h2>Top 5 Words</h2>
      <table className="top-words-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Word</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {topWords.map((item, index) => (
            <tr key={item.word}>
              <td>{index + 1}</td>
              <td>{item.word}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}