import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error2) {
        errorElement = <p className="text-danger">Error:{error?.message} {error2?.message}</p>
    }
    if (user || user2) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div className='border w-50'></div>
            </div>
            {errorElement}
            <div className='m-2'>
                <Button onClick={() => signInWithGoogle()} className='w-50 mx-auto d-block py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src={google} alt="" />
                    Sign With Google
                </Button>
            </div>
            <div className='m-2'>
                <Button onClick={() => signInWithGithub()} className='w-50 mx-auto d-block py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src={github} alt="" />
                    Sign With Git Hub
                </Button>
            </div>
            <div className='m-2'>
                <Button className='w-50 mx-auto d-block py-2'>
                    <img className='mx-2' style={{ width: '25px' }} src={facebook} alt="" />
                    Sign With Facebook
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;