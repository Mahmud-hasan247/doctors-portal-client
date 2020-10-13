import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img className='mt-5 mb-3' style={{ height: '50px'}} src={service.image} alt="" />
            <h6>{service.name}</h6>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi amet sint nobis, architecto blanditiis autem?</p>
        </div>
    );
};

export default ServiceDetail;