import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        key: 1,
        title: 'Teeth Orthodontics',
        visitingUsers: '8:00 AM - 9:00 AM',
        seats: 10
    },
    {
        key: 2,
        title: 'Cosmetics Dentistry',
        visitingUsers:'10:00 AM - 11:00 AM',
        seats: 10
    },
    {
        key: 3,
        title: 'Teeth Cleaning',
        visitingUsers:'11:30 AM - 12:30 PM',
        seats: 10 
    },
    {
        key: 4,
        title: 'Cavity Protection',
        visitingUsers: '2:30 PM - 4:00 PM',
        seats: 10 
    },
    {
        key: 5,
        title: 'Teeth Orthodontics',
        visitingUsers: '5:00 PM - 7:00 PM',
        seats: 10 
    },
    {
        key: 6,
        title: 'Teeth Orthodontics',
        visitingUsers: '8:00 PM - 9:00 PM',
        seats: 10 
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center special-color'>Available Appointments on {date.toDateString()} </h2>
            <div className="container">
            <div className="row d-flex">
                {
                    bookingData.map(booking => <BookingCard date={date} book = {booking} key={booking.key}></BookingCard>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookAppointment;