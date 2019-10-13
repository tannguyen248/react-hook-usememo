import React, { useState, useEffect } from 'react';
import './App.css';
import { ComponentMemo, ComponentNormal } from './components';

function App() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [now]);

  return (
    <div className="App">
      <div>
        ComponentMemo <ComponentMemo c={now} a={1} b={2} />
      </div>
      <div>
        ComponentNormal <ComponentNormal c={now} a={1} b={2} />
      </div>
    </div>
  );
}

export default App;
