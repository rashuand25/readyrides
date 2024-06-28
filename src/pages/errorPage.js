import React from 'react';
import Footer from '../components/footerComponent';

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
            <Footer />
        </>
    );
}

export default ErrorPage;
