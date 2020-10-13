import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorDetail from './DoctorDetail/DoctorDetail';


const doctors = [
    {
        name: 'Dr. Jamil hussain',
        image: doctor,
        contact: +880149555555
    },
    {
        name: 'Dr. Hasan jamil',
        image: doctor,
        contact: +8801483333333
    },
    {
        name: 'Dr. Jamal uddin',
        image: doctor,
        contact: +8801788888888
    }
]

const Doctors = () => {
    return (
        <div>
            <h6 className="mt-5 text-center special-color">OUR DOCTORS</h6>
            <div className="container d-flex">
            {
                doctors.map(doctor => <DoctorDetail doctors={doctor}></DoctorDetail>)
            }
            </div>
        </div>
    );
};

export default Doctors;