import React from 'react';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        image: cavity
    },
    {
        name: 'Tooth Whitening',
        image: whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center serviceInfo">
                <h5 style={{ color: '#1CC7C1', fontWeight: '500' }} >OUR SERVICES</h5>
                <h2 className='mb-5'>SERVICES WE PROVIDE</h2>
            </div>

            <div className='d-flex justify-content-center '>
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;