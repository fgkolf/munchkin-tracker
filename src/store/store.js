import React, { createContext, useReducer } from 'react';
import GAME_STATUS from '../common/constants';

const initialState = { gameStatus: GAME_STATUS.START };
const store = createContext(initialState);
const { Provider } = store;
const startGameAction = () => ({ type: 'start-game' });
const endGameAction = () => ({ type: 'end-game' });

const reducer = (state, action) => {
  switch (action.type) {
    case 'end-game':
      return { ...state, gameStatus: GAME_STATUS.END };
    case 'start-game':
      return { ...state, gameStatus: GAME_STATUS.START };
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, startGameAction, endGameAction };
