import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }
    return (
        <div className='conteiner w-50 mx-auto m-5 p-3 border border-1 rounded shadow'>
            <h2 className='text-center text-primary'>Plase Register</h2>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your name" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? "text-primary" : ''} label="Accept Trams and Condition" />
                </Form.Group>
                <Button disabled={!agree} className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Button className='mt-2 w-50 mx-auto d-block' variant="primary" onClick={navigateLogin}>
                Login
            </Button>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;