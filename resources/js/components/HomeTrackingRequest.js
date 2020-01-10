import React, { useEffect, useState, useRef } from 'react';
import api from '../api'
import logo from '../../img/logo-transparent.png';

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
                {['design','design-1','design-2'].map(element => <div className={element}></div>)}
                <div style={{position: 'relative'}}><a className="site-logo"><img src={logo} /></a></div>
                <div className="site-motto">Track your shipped goods using our secured service channel.</div>
                <p className="site-made-wth"> Made with love by @frontdevguy</p>
                <div className="main-request-area">   
                    <div className="demo-preview-art"></div>
                    <div className="request-card">
                        <div className="input-card-container">
                            <div className="enter-info-header">
                                <h3> Enter your tracking number below </h3>
                            </div>
                            <input ref={trackingCodeRef} className="tracking-code-input" />
                            <button className="run-tracking" onClick={initiateGetTrackingDetails}> Track Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}