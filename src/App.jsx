/*
 * @Author: Diana Tang
 * @Date: 2025-04-16 16:55:13
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /chiplot-demo/src/App.jsx
 */
import React, { useState } from 'react';
import { Layout } from 'antd';
import UploadPanel from './components/UploadPanel';
import ParamControls from './components/ParamControls';
import VolcanoPlot from './components/VolcanoPlot';

const { Header, Content } = Layout;

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [pKey, setPKey] = useState('');
  const [fcKey, setFcKey] = useState('');
  const [pCutoff, setPCutoff] = useState(0.05);
  const [fcCutoff, setFCCutoff] = useState(1.0);

  const onDataParsed = (parsed) => {
    setData(parsed);
    if (parsed.length > 0) setColumns(Object.keys(parsed[0]));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', fontSize: 24 }}>🎯 CHIPlot - 火山图在线绘制</Header>
      <Content style={{ padding: 24 }}>
        <UploadPanel onDataParsed={onDataParsed} />
        {columns.length > 0 && (
          <>
            <ParamControls
              columns={columns}
              pKey={pKey}
              setPKey={setPKey}
              fcKey={fcKey}
              setFcKey={setFcKey}
              pCutoff={pCutoff}
              setPCutoff={setPCutoff}
              fcCutoff={fcCutoff}
              setFCCutoff={setFCCutoff}
            />
            <VolcanoPlot data={data} pKey={pKey} fcKey={fcKey} pCutoff={pCutoff} fcCutoff={fcCutoff} />
          </>
        )}
      </Content>
    </Layout>
  );
}

export default App;
