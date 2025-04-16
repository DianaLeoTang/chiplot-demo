import React from 'react';
import { InputNumber, Select, Slider } from 'antd';

const ParamControls = ({ columns, pKey, setPKey, fcKey, setFcKey, pCutoff, setPCutoff, fcCutoff, setFCCutoff }) => (
  <>
    <Select style={{ width: 200 }} value={pKey} onChange={setPKey} placeholder="选择P值列">
      {columns.map(col => <Select.Option key={col} value={col}>{col}</Select.Option>)}
    </Select>
    <Select style={{ width: 200, marginLeft: 10 }} value={fcKey} onChange={setFcKey} placeholder="选择Fold Change列">
      {columns.map(col => <Select.Option key={col} value={col}>{col}</Select.Option>)}
    </Select>
    <div style={{ marginTop: 20 }}>
      <span>P值阈值：</span>
      <Slider min={0.001} max={0.1} step={0.001} value={pCutoff} onChange={setPCutoff} style={{ width: 300 }} />
    </div>
    <div>
      <span>log2 Fold Change 阈值：</span>
      <Slider min={0.5} max={3.0} step={0.1} value={fcCutoff} onChange={setFCCutoff} style={{ width: 300 }} />
    </div>
  </>
);

export default ParamControls;
