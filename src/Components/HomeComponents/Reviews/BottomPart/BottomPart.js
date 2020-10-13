import React from 'react';
import doctor1 from '../../../../images/Ellipse 1.png';
import doctor2 from '../../../../images/Ellipse 2.png';
import doctor3 from '../../../../images/Ellipse 3.png';

const Reviews = [
    {
        name: 'Wishen herry',
        image: doctor1
    },
    {
        name: 'Hilary Clinton',
        image: doctor2
    },
    {
        name: 'Maria',
        image: doctor3
    }
]


const BottomPart = () => {
    return (
        <>
            <div className="container mt-5">
                <div class="card-deck">
                    {
                        Reviews.map(review => <div className="card ">
                            <p className='text-center mt-5 pr-3 pl-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quam necessitatibus modi quo. Ducimus repellendus sapiente omnis natus, vel similique voluptatibus repellat consequuntur harum nihil?</p>
                            <div class="card-body d-flex">
                                <img className="img-fluid ml-3" src={review.image} alt="" />
                                <div className='ml-3 mt-3'>
                                    <h6 style={{ color: '#1CC7C1'}}>{review.name}</h6>
                                    <p>Lorem, ipsum dolor.</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default BottomPart;