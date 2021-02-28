import './App.css';
import { useState } from 'react';
import { Button, DatePicker, version, message, Alert } from 'antd';

const App = () => {
  const [date, setDate] = useState(null);
  const onChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    );
    setDate(value);
  };
  return (
    <div className='p-6 max-w-sm items-center space-y-2'>
      <h1>antd version: {version}</h1>
      <DatePicker onChange={onChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message='当前日期'
          description={date ? date.format('YYYY年MM月DD日') : '未选择'}
        />
      </div>
      <Button type='primary' style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
};

export default App;
