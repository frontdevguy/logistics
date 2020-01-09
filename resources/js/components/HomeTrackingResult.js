import React from 'react';

export default ({trackingState}) => {
    const {trackingDetails: {name, age}}  = trackingState;
    return (
        <>
           <div className="tracking-result-container">

           </div>
        </>
    )
}