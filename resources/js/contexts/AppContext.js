import React from 'react';
import { useImmerReducer } from 'use-immer';
import { appReducer } from '../reducers';

const initialState = {
    users : []
}

export const AppContext = React.createContext();
export const AppDispatchContext = React.createContext();

export default ({children}) => {
    const [state, dispatch] = useImmerReducer(appReducer, initialState);
    return (
      <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
            {children}
        </AppDispatchContext.Provider>
    </AppContext.Provider>
    )
}

export const useAppState = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
      throw new Error('useAppState must be used within a AppProvider');
    }
    return context;
  };
  
  export const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);
    if (context === undefined) {
      throw new Error('useAppDispatch must be used within a AppProvider');
    }
    return context;
  };