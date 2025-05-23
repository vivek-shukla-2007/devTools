import React, { useState } from 'react';

export default function JsonTreeView({ data, depth = 0 }) {
  const [isCollapsed, setIsCollapsed] = useState(depth > 0);

  if (typeof data === 'object' && data !== null) {
    return (
      <div className="font-mono">
        <span 
          className="cursor-pointer text-purple-600"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {Array.isArray(data) ? '[' : '{'}
          {isCollapsed ? '...' : ''}
          {!isCollapsed && (
            <div className="ml-4">
              {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                  {!Array.isArray(data) && (
                    <span className="text-red-600">"{key}": </span>
                  )}
                  <JsonTreeView data={value} depth={depth + 1} />
                  {','}
                </div>
              ))}
            </div>
          )}
          {Array.isArray(data) ? ']' : '}'}
        </span>
      </div>
    );
  }

  return (
    <span className={typeof data === 'string' ? 'text-green-600' : 'text-blue-600'}>
      {typeof data === 'string' ? `"${data}"` : String(data)}
    </span>
  );
}