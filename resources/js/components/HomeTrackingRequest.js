import React, { useEffect, useState } from 'react';
import api from '../api'
import logo from '../../img/logo-transparent.png';

export default ({updateTrackingState}) => {
    const [trackingCode, setTrackingCode] = useState('')

    const initiateGetTrackingDetails = (e) => {
        setTrackingCode(e.target.value);
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
                <div className="design"></div>
                <div className="design-1"></div>
                <div className="design-2"></div>
                <div style={{position: 'relative'}}><a className="site-logo"><img src={logo} /></a></div>
                <div className="site-motto">Track your shipped goods using our secured service channel.</div>
                <p className="site-made-wth"> Made with love by @frontdevguy</p>
                <br />
                <div className="main-request-area">   
                    <div className="demo-preview-art"></div>
                    <div className="request-card">
                        

                        <div className="input-card-container">
                            <div className="enter-info-header">
                                <h3> Enter your tracking number below </h3>
                            </div>
                            <input className="tracking-code-input" />

                            <button className="run-tracking"> Track Now </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="main">
                <div className="cover black" data-color="black"></div>
                    <div className="container">
                        <h1 className="logo cursive">
                            Jeay's Logistics
                        </h1>
                        <div className="content">
                            <h4 className="motto">Track your shipped goods using our secured service channel.</h4>
                            <div className="subscribe">
                                <h5 className="info-text">
                                    Enter your tracking number below to track your goods.
                                </h5>
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
                                        <div className="form-inline" role="form">
                                            <div className="form-group" style={{width: '100%'}}>
                                                <label className="sr-only">Tracking Number</label>
                                                <input onBlur={initiateGetTrackingDetails} type="text" style={{textAlign: 'center', textTransform: 'capitalize', minHeight: '50px', width: '100%', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}} className="form-control transparent" placeholder="Enter tracking number" />
                                                <small style={{display: 'block',marginTop: '5px', textAlign: 'center', color: 'coral'}}> Click outsite the box after typing tracking number </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
    )
}