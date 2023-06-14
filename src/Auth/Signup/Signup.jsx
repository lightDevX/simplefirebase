import React from 'react';

const Signup = () => {
    return (
        <>
            <h3>This Register Form</h3>
            <br />
            <form>
                <input type="email" name="email" id="email" />
                <br />
                <input type="password" name="password" id="password" /><br />
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default Signup;