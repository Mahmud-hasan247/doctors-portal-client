import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingCard.css';

const BookingCard = ({ book, date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center mt-5">
            <div id="bookingCard">
                <h6 className='special-color'>{book.title}</h6>
                <strong>{book.visitingUsers}</strong>
                <br />
                <small className='text-muted '>{book.seats} Seats Available</small>
                <br />
                <button onClick={openModal} className='btn mt-3 mb-3'>Book Appointment</button>
            </div>
            <BookingForm open={modalIsOpen} date={date} bookingTitle={book.title} close={closeModal}></BookingForm>
        </div>
    );
};

export default BookingCard;