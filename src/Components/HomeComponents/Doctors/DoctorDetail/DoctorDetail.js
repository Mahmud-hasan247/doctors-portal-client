import React from 'react';

const DoctorDetail = ({ doctors }) => {

    const doctorSize = {
        width: "360px",

    }

    return (
        <div>
            <div className="col-4 mt-5">
                <div  style={{width: '300%', height: '300%'}}>
                    <img  style={doctorSize} src={doctors.image} alt="" />
                    <div className="ml-5 mt-5 pl-3 text-center">
                    <h6 >{doctors.name}</h6>
                    <small>{doctors.contact}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;