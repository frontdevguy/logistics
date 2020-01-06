import React from 'react';
import {useTrackingState} from '../contexts/TrackingContext';



export default () => {
    const { trackingState: {trackingDetails: {name, age}} } = useTrackingState();
    return (
        <>
           <h3> Your tracking result </h3>
           <ul>
               <li> Name: {name} </li>
               <li> Age: {age} </li>
           </ul>
        </>
    )
}