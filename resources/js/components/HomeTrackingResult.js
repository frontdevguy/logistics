import React from 'react';

export default ({trackingState}) => {
    const {trackingDetails: {name, age}}  = trackingState;
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