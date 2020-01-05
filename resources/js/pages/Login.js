import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import {Header, Footer} from '../ui';

export default () => {
    return (
        <Fragment>
            <Header />
            <h1>
                This is Login
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
            <Footer/>
        </Fragment>
    )
}