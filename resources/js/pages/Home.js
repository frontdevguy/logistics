import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/homestyle.css';
import { useTrackingState } from '../contexts/TrackingContext';
import HomeTracking from '../components/HomeTracking';
import HomeTrackingResult from '../components/HomeTrackingResult';

export default () => {
    const { trackingState } = useTrackingState();
    return (
        <Fragment>
           {!trackingState.trackingDetails && <HomeTracking />}
           {trackingState.trackingDetails && <HomeTrackingResult />}
        </Fragment>
    )
}