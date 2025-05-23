import React, { useState } from 'react';
import JsonTreeView from './JsonTreeView';

export default function JsonFormatter() {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState('');

  const formatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedData(parsed);
      setError('');
    } catch (err) {
      setError(`Invalid JSON: ${err.message}`);
      setParsedData(null);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">JSON Formatter</h2>
      
      <div className="flex space-x-4">
        <div className="flex-1">
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-96 p-2 border rounded font-mono"
            placeholder='Paste JSON here...'
          />
          <button
            onClick={formatJson}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Format JSON
          </button>
        </div>

        <div className="flex-1 border-l pl-4">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : parsedData ? (
            <JsonTreeView data={parsedData} />
          ) : (
            <div className="text-gray-500">Formatted JSON will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
}