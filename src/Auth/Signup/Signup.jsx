import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';

const Signup = () => {

    const [email, setEmail] = useState('');

    const auth = getAuth();


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordField = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value);
    }

    return (
        <>
            <div className='mx-auto w-50'>
                <h3>This Register Form</h3>
                <br />
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
                    <input className='w-50 mb-4' onChange={handleEmailField} type="email" name="email" id="email" placeholder='Provide your email' />
                    <input className='w-50 mb-4' onBlur={handlePasswordField} type="password" name="password" id="password" placeholder='Provide your password' />
                    <button className='w-25' type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default Signup;