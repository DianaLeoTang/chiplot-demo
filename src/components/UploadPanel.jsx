/*
 * @Author: Diana Tang
 * @Date: 2025-04-16 17:45:19
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /chiplot-demo/src/components/UploadPanel.jsx
 */
import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Papa from 'papaparse';

const UploadPanel = ({ onDataParsed }) => {
  const props = {
    beforeUpload: (file) => {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          onDataParsed(results.data);
          message.success("文件上传并解析成功！");
        },
        error: () => message.error("解析失败，请检查CSV格式"),
      });
      return false;
    },
    maxCount: 1,
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>上传CSV文件</Button>
    </Upload>
  );
};

export default UploadPanel;
