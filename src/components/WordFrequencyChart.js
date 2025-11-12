import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getTopWords } from "../services/textAnalysisService";
import '../styles/WordFrequencyChart.css';

export function WordFrequencyChart(props) {
  const { freqDict } = props;

  if (!freqDict || Object.keys(freqDict).length === 0) {
    return (
      <div className="word-frequency-container">
        <h2>Repeated Words - Bar Chart</h2>
        <div className="no-data-container">
          <div className="no-data-icon">📊</div>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  const freqArray = getTopWords(freqDict, 10);

  return (
    <div className="word-frequency-container">
      <h2>Repeated Words - Bar Chart</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={freqArray}>
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}