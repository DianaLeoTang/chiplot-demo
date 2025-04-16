import React from 'react';
import Plot from 'react-plotly.js';

const VolcanoPlot = ({ data, pKey, fcKey, pCutoff, fcCutoff }) => {
  const transformed = data.map(row => {
    const pval = row[pKey];
    const logP = -Math.log10(pval);
    const fc = row[fcKey];
    let color = 'gray';
    if (pval < pCutoff && fc > fcCutoff) color = 'red';
    if (pval < pCutoff && fc < -fcCutoff) color = 'blue';
    return { x: fc, y: logP, color };
  });

  const trace = {
    x: transformed.map(d => d.x),
    y: transformed.map(d => d.y),
    mode: 'markers',
    type: 'scatter',
    marker: { color: transformed.map(d => d.color) },
  };

  return (
    <Plot
      data={[trace]}
      layout={{
        title: 'Volcano Plot',
        xaxis: { title: 'log2 Fold Change' },
        yaxis: { title: '-log10(p-value)' },
      }}
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default VolcanoPlot;
