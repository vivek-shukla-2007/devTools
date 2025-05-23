import HomePage from './features/home/HomePage';
import JsonFormatter from './features/json-formatter/JsonFormatter';
import CronGenerator from './features/cron-generator/CronGenerator';
import Base64Tool from './features/base64/Base64Tool';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/json-formatter" element={<JsonFormatter />} />
      <Route path="/cron-generator" element={<CronGenerator />} />
      <Route path="/base64" element={<Base64Tool />} />
    </Routes>
  );
}

export default App;