import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentail => {
                const loggedUser = userCredentail.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleEmailField = (e) => {
        // console.log(form.value);
        const form = e.target;
        setEmail(form.value);
    }

    const handlePasswordField = (e) => {
        // console.log(form.value)
        const form = e.target;
        setEmail(form.value);
    }

    return (
        <>
            <div className='mx-auto w-50'>
                <h3>This Register Form</h3>
                <br />
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
                    <input className='w-50 mb-4' onChange={handleEmailField} type="email" name="email" id="email" placeholder='Provide your email' required />
                    <input className='w-50 mb-4' onBlur={handlePasswordField} type="password" name="password" id="password" placeholder='Provide your password' required />
                    <button className='w-25' type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default Signup;