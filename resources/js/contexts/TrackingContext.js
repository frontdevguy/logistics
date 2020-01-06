import React from 'react';

const initialState = {
   trackingDetails: false
}

export const TrackingContext = React.createContext();

export const TrackingProvider = ({children}) => {
    const [trackingState, updateTrackingState] = React.useState(initialState);
    return (
      <TrackingContext.Provider value={{trackingState, updateTrackingState}}>
        {children}
    </TrackingContext.Provider>
    )
}

export const useTrackingState = () => {
    const context = React.useContext(TrackingContext);
    if (context === undefined) {
      throw new Error('useTrackingState must be used within a TrackingProviderr');
    }
    return context;
  };
