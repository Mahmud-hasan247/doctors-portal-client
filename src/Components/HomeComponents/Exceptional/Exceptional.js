import React from 'react';
import photo from '../../../images/Mask Group 3.png';
import './Exceptional.css';

const Exceptional = () => {
    return (
        <section>
            <div  className="container mt-5">
                <div style={{ height: '200px' }} className="row">
                    <div className="col-md-6">
                        <img className="img-fluid dental-image ml-5" src={photo} alt='' />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h2>Exceptional Dental <br /> Care, on Your Terms </h2>
                        <h6 className="text-muted mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Assumenda perspiciatis, provident modi sequi <br/> ad impedit aliquam sapiente aliquid, <br/>  esse minus unde temporibus distinctio.<br/> Adipisci maiores corrupti dicta nisi<br/> nemo esse dolorem est. Ullam non minus facilis<br/> inventore dignissimos nisi. Quo, iusto voluptate<br/> optio quaerat quae quod excepturi<br/> similique nobis distinctio?
                    </h6>
                        <button className="btn mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;