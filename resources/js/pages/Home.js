import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/homestyle.css';
import { useTrackingState } from '../contexts/TrackingContext';
import HomeTracking from '../components/HomeTracking';
import HomeTrackingResult from '../components/HomeTrackingResult';

export default () => {
    const { trackingState, updateTrackingState } = useTrackingState();
    return (
        <>
           {!trackingState.trackingDetails ? (
                <HomeTracking updateTrackingState={updateTrackingState} /> 
           ): (
                <HomeTrackingResult trackingState={trackingState} />
           )}
        </>
    )
}