import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getTopWords } from "../services/textAnalysisService";

export function WordFrequencyChart(props) {
  const { freqDict } = props;

  if (!freqDict || Object.keys(freqDict).length === 0) {
    return (
      <React.Fragment>
        <div>
          <h3>Repeated Words - Bar Chart</h3>
          <div
            style={{
              border: "1px solid black",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>No data available</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const freqArray = getTopWords(freqDict, 10);

  return (
    <React.Fragment>
      <div>
        <h3>Repeated Words - Bar Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={freqArray}>
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
}
