import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
export default () => {
    return (
        <Fragment>
            <h1>
                This is About
            </h1>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
            </nav>
        </Fragment>
    )
}