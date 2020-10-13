import React from 'react';
import InfoCard from './InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'


const information = [
    {
        title: 'Opening Hour',
        description: 'we open our chamber 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Rasulpur, donia, jatrabari, Dhaka.',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+8801553456346',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section>
            <div className='d-flex justify-content-center '>
            <div className="w-75 row">
            {
                information.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </div>
        </section>
    );
};

export default BusinessInfo;