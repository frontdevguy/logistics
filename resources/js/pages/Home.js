import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/homestyle.css';
import api from './../api'

export default () => {
    const [trackingCode, setTrackingCode] = useState('');
    const [trackingDetails, setTrackinDetails] = useState(false);

    const initiateGetTrackingDetails = (e) => {
        setTrackingCode(e.target.value);
    }

    useEffect (() => {
        async function getTrackingDetailsFromCode() {
            if(trackingCode) {
                const {data} = await api.getTrackingDetailsFromCode(trackingCode);
                setTrackinDetails(data)
                console.log(data);
            }
        }
        getTrackingDetailsFromCode();
    }, [trackingCode]);
    return (
        <Fragment>
            <div className="main">
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
                                                <input value={trackingCode} onChange={initiateGetTrackingDetails} type="text" style={{textAlign: 'center', textTransform: 'capitalize', minHeight: '50px', width: '100%', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}} className="form-control transparent" placeholder="Enter tracking number" />
                                                <small style={{display: 'block',marginTop: '5px', textAlign: 'center', color: 'coral'}}> Click outsite the box after typing tracking number </small>
                                            </div>
                                            {/* <button type="button" value={trackingCode} onChange={initiateGetTrackingDetails}  style={{minHeight: '50px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', fontFamily: 'Open Sans'}} className="btn btn-danger btn-fill">Get Details</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { trackingDetails && (
                    <>
                        <h3> Your tracking details </h3>
                        <ul>
                            <li> Name: {trackingDetails.name}</li>
                            <li> Age: {trackingDetails.age}</li>
                        </ul>
                    </>
                )}
        </Fragment>
    )
}