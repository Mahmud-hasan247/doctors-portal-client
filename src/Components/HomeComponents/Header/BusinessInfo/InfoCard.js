import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white  info-container'>
            <div className={`d-flex card-container justify-content-center info-${info.background}`}>
                <div className="">
                    <FontAwesomeIcon className='info-icon mr-3' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
                </div>

            </div>
        </div>
    );
};

export default InfoCard;