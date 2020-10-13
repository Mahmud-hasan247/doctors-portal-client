import React from 'react';
import doctor from '../../../images/doctor.png';

const MakeAppointment2 = () => {
    return (
        <>
        <div className='d-flex '>
            <div className="col-4">
                <img className="img-fluid " style={{ height: '350px'}} src={doctor} alt=""/>
            </div>
            <div className="col-8 mt-5" >
                <h5 style={{ color: '#1CC7C1'}}>APPOINTMENT</h5>
                <div style={{color: 'white'}}>
                <h1>Make An Appointment <br/> Today</h1> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora quod esse quia eveniet fugiat delectus voluptatum ex dolorem totam.</p>
                <button className='btn'>Learn More</button>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default MakeAppointment2;