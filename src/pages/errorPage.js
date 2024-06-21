import React from 'react';

const Error = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh' // Adjust as needed
        }}>
            <h1>Error</h1>
            <p>Oops! Something went wrong. Please try again later.</p>
        </div>
    );
}

export default Error;
