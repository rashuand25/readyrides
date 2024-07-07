import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' // Adjust as needed
            }}>
                <h1>errorPage</h1>
                <p>Oops! Something went wrong. Please try again later.</p>
            </div>
        </>
    );
}

export default ErrorPage;
