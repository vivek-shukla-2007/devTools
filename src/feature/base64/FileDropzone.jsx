import React, { useState } from 'react';

export default function FileDropzone() {
  const [output, setOutput] = useState('');

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOutput(btoa(e.target.result));
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Base64 Converter</h2>
      <input
        type="file"
        onChange={(e) => handleFile(e.target.files[0])}
        className="mb-4"
      />
      <textarea
        value={output}
        readOnly
        className="border p-2 w-full h-40"
        placeholder="Base64 output will appear here..."
      />
    </div>
  );
}