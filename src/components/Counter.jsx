import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-neutral-900 border border-purple-500/30 flex flex-col items-center gap-4 max-w-sm mx-auto">
      <h3 className="text-lg font-semibold text-purple-200">Interactive Demo</h3>
      <div className="text-4xl font-mono text-white">{count}</div>
      <div className="flex gap-2">
        <button 
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
        >
            -
        </button>
        <button 
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
        >
            Increment
        </button>
      </div>
      <p className="text-xs text-neutral-500 text-center">
        This is a real React component rendered inside the Topic Detail page.
      </p>
    </div>
  );
};

export default Counter;
