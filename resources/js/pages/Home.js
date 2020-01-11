import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/new-homestyle.css';
import { useTrackingState } from '../contexts/TrackingContext';
import HomeTrackingRequest from '../components/HomeTrackingRequest';
import HomeTrackingResult from '../components/HomeTrackingResult';
import { Header } from '../ui'

export default () => {
    const { trackingState, updateTrackingState } = useTrackingState();
    return (
        <>
            <Header />
           {!trackingState.trackingDetails ? (
                <HomeTrackingRequest updateTrackingState={updateTrackingState} /> 
           ): (
                <HomeTrackingResult trackingState={trackingState} />
           )}
        </>
    )
}