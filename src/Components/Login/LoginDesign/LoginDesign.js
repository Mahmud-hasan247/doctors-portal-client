import React from 'react';
import loginImg from '../../../images/Group 140.png';

const LoginDesign = ({signIn}) => {
    return (
        <div >
            <div className="row">
                <div className="col-md-6">
                    <form action="" className="loginForm mt-5 pl-5 pr-5" >
                        <h4 className='text-center special-color mt-5'>Sign in</h4>
                        <input className='form-control m-5' type="text" placeholder='Email' />
                        <input className='form-control m-5'  type="text" placeholder='Password' />
                        <button onClick={signIn()} className='btn form-control ml-5 mr-5'>Sign in with Google</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img style={{width: '550px'}} src={loginImg} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default LoginDesign;