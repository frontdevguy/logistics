import React, { useEffect, useState, useRef } from 'react';
import api from '../api'

export default ({updateTrackingState}) => {
    const [trackingCode, setTrackingCode] = useState('')
    const [shouldInputError, setShouldInputError] = useState(false)
    const trackingCodeRef = useRef(null);

    const removeTrackingInputError = () => {
        if(shouldInputError) return setShouldInputError(false);
    }

    const initiateGetTrackingDetails = () => {
        const {value} = trackingCodeRef.current;
        if(!value) return setShouldInputError(true);
        setTrackingCode(value);
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
                            <input onFocus={removeTrackingInputError} spellCheck="false" ref={trackingCodeRef} className="tracking-code-input" placeholder="Enter tracking code"/>
                            { shouldInputError && <p className="tracking-code-input-error">Input a tracking code to initiate process</p> }
                            <button className="run-tracking" onClick={initiateGetTrackingDetails}> Initiate Tracking Process </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}