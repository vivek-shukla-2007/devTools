import React, { useState } from 'react';

export default function CronVisual() {
  const [expression, setExpression] = useState('0 0 * * *');
  
  return (
    <div className="cron-builder">
      <input 
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="e.g. 0 0 * * *"
      />
      <div className="presets">
        <button onClick={() => setExpression('0 0 * * *')}>Daily</button>
        <button onClick={() => setExpression('0 0 * * 1-5')}>Weekdays</button>
      </div>
    </div>
  );
}