import React, { useEffect, useState, useRef } from 'react';
import api from '../api'

export default ({updateTrackingState}) => {
    const [trackingCode, setTrackingCode] = useState('')
    const trackingCodeRef = useRef(null);

    const initiateGetTrackingDetails = (e) => {
        const {value} = trackingCodeRef.current;
        if(value) setTrackingCode(value);
    }

    useEffect (() => {
        async function getTrackingDetailsFromCode() {
            if(trackingCode) {
                const {data} = await api.getTrackingDetailsFromCode(trackingCode);
                updateTrackingState( (prevTrackingState) => ({...prevTrackingState, trackingDetails: data}))
            }
        }
        getTrackingDetailsFromCode();
    }, [trackingCode]);

    return (
        <>
            <div className="home-wrapper">
            <p className="site-made-wth"> Made with love by @frontdevguy</p>
                <div className="main-request-area">   
                    <div className="demo-preview-art">'
                        <div className="input-card-container">
                            <div className="enter-info-header">
                                <h3> Track your shipped goods using our secured service channel </h3>
                            </div>
                            <input spellCheck="false" ref={trackingCodeRef} className="tracking-code-input" placeholder="Enter tracking code"/>
                            <button className="run-tracking" onClick={initiateGetTrackingDetails}> Initiate Tracking Process </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}