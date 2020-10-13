import React from 'react';
import quote from '../../../../images/quote.png';

const TopPart = () => {
    return (
        <div className="container mt-5">
            <div className='row mt-5'>
                <div className="col-md-4">
                    <h5 className='mt-5' style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                    <h2>What's Our Patients <br /> Says</h2>
                </div>
                <div className="col-md-3 offset-md-5">
                    <img style={{ height: '200px' }} src={quote} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopPart;