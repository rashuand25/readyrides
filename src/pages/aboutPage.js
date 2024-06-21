import React from 'react';

const AboutPage = () => {
    return (
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                 <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    Who We Are
                </h1>
                <p>We are a family owned business and have been since our inception in 1972. Our founder built this business soley based on 3 things that we still value and uphold till this day.. Excellence, a great value, and making sure our customers leave with smiles on their faces!</p>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    What Do We Do
                </h1>
                <p> Ready Rides is a car rental service that provides a wide range of vehicles to meet any and all of your needs. Whether you're going on a road trip, to a ball game or festival, or simply need a luxury car for a formal business meeting, Ready Rides has got you covered.</p>

                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    Who Do We Cater To
                </h1>
                <p>Here at Ready Rides we have a 'creed'... No job is TOO small and no job is TOO big! Need a small compact vehicle to make a quick unplanned trip with pet or child... We got you covered. Need a large truck or van because your moving... We got you covered... Need a fleet of 5 or even 10 monster trucks to move dirt around... Again we have you COVERED!!! For best service and accomodations we highly recommend that you inquire with us at your earliest convenince about your needs so that we can make sure we have you COVERED for your larger jobs/projects. </p>
               
            </div>
        </>
    );
}

export default AboutPage;
