import React from 'react';
import { LevelContext } from './levelContext';
import { useState } from 'react';

const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(2);

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

export default LevelProvider;
