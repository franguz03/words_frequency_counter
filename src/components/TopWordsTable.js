import React from "react";
import { getTopWords } from "../services/textAnalysisService";

export function TopWordsTable(props) {
  const {freqDict} = props;

  if (!freqDict || Object.keys(freqDict).length === 0) {
    return (
      <React.Fragment>
        <div>
          <h3>Top 5 Words</h3>
          <p>No data available</p>
        </div>
      </React.Fragment>
    );
  }

  const topWords = getTopWords(freqDict, 5);

  return (
    <React.Fragment>
      <div>
        <h3>Top 5 Words</h3>
        <table>
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
    </React.Fragment>
  );
}
