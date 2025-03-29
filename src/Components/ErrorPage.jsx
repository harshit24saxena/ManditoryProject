

import React from 'react'
import './ComponentCSS/ErrorPage.css';
const ErrorPage = () => {
    return (
        <>
            <div id="error-container">
                <h1>404</h1>
                <h2>There is nothing Here</h2>
                <p>Sorry, the page you were looking for in this blog does not exist.</p>
                <i id="i" className="fa fa-home"></i>
                <i className="bi bi-house"></i>
                <a className="homepage" to="/">Home</a>
            </div>
        </>
    )
}

export default ErrorPage
