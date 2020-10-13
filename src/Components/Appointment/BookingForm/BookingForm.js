import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BookingForm = ({ close, open, bookingTitle, date }) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.Service = bookingTitle;
        data.appointmentDate = date.toDateString();
        data.bookingDate = new Date();

        console.log(data);
        
        fetch('http://localhost:5000/saveAppointment',{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                close();
                alert('Appointment saved successfully.')
            }
        })
    };

    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={close}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-center special-color'>{bookingTitle}</h2>
                <p className='text-center text-muted'>ON {date.toDateString()}</p>
                <form style={{ width: '500px' }} onSubmit={handleSubmit(onSubmit)}>
                    <input name="doctor" className="form-control mt-3" placeholder='Select Doctor' ref={register({ required: true })} type='check' ref={register} />
                    <br />
                    <input name="name" className="form-control mt-3" placeholder="Your Name" type="text" ref={register({ required: true })} />
                    <br />
                    <input name="phone" className="form-control mt-3" placeholder="Your Phone Number" type="text" ref={register({ required: true })} />
                    <br />
                    <input name="email" className="form-control mt-3" placeholder='Your Email' type="email" ref={register({ required: true })} />
                    <br />
                    <input name="date" className="form-control mt-3" placeholder="Select Date" type="date" ref={register({ required: true })} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button class="btn" type="submit" > SEND</button>
                </form>
            </Modal>
        </div>
    );
};

export default BookingForm;