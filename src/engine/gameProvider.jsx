import React, { useReducer } from 'react'

const GameContext = React.createContext();

const reducer = (state) => {
  return state;
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
