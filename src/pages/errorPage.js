import React from 'react';
import Footer from '../components/footerComponent';
import NavBarComponent from '../components/navBarComponent';

const Error = () => {
    return (
        <>
            <NavBarComponent />
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
            <Footer />
        </>
    );
}

export default Error;
