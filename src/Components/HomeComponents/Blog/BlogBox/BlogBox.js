import React from 'react';
import doctor1 from '../../../../images/Ellipse 1.png';
import doctor2 from '../../../../images/Ellipse 2.png';
import doctor3 from '../../../../images/Ellipse 3.png';


const blogs =[
    {
        name: 'Dr.Zubaida',
        image: doctor3
    },
    {
        name: 'Dr.Abdullah',
        image: doctor1
    },
    {
        name: 'Dr.Maria',
        image: doctor2
    }
]

const BlogBox = () => {
    return (
        <div>
            <div className="container mt-5">
                <div class="card-deck">
                    {
                        blogs.map(blog => <div className="card ">
                            <div class="card-body d-flex">
                                <img className="img-fluid ml-3" src={blog.image} alt="" />
                                <div className='ml-3 mt-3 '>
                                    <h6 style={{ color: '#1CC7C1'}}>{blog.name}</h6>
                                    <p className='text-secondary'>23, sep, 2020</p>
                                </div>
                            </div>
                            <h6 className='text-left ml-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <p className='text-left text-muted mt-3 pr-3 pl-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quam necessitatibus modi quo.</p>
                            
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogBox;