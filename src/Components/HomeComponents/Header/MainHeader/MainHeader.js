import React from 'react';
import chair from '../../../../images/chair.png';
import './MainHeader.css';


const MainHeader = () => {

    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: ' #3A4256'}}>Your First Smile <br /> Starts Here</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod eveniet soluta, deserunt fugiat natus.</p>
                <button className="btn ">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </main>
    );
};

export default MainHeader;