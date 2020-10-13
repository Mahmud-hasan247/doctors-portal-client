import React from 'react';
import Appointment from '../Components/Appointment/Appointment';
import Footer from '../Components/HomeComponents/Shared/Footer/Footer';
import Navbar from '../Components/HomeComponents/Shared/Navbar/Navbar';

const AppointmentPage = () => {
    return (
        <div>
            <Navbar/>
            <Appointment/>
            <Footer/>
        </div>
    );
};

export default AppointmentPage;