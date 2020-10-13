import React from 'react';
import Blog from '../Components/HomeComponents/Blog/Blog';
import Doctors from '../Components/HomeComponents/Doctors/Doctors';
import Exceptional from '../Components/HomeComponents/Exceptional/Exceptional';
import Header from '../Components/HomeComponents/Header/Header';
import MakeAppointment from '../Components/HomeComponents/MakeAppointment/MakeAppointment';
import Review from '../Components/HomeComponents/Reviews/Review';
import Services from '../Components/HomeComponents/Services/Services';
import Footer from '../Components/HomeComponents/Shared/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Review/>
            <Blog/>
            <Doctors/>
            <Footer/>
        </>
    );
};

export default HomePage;