import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twiterrProvider = new TwitterAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser);
            })
            .catch((error) => {
                console.log(error, error.message);
            });
    }

    const handleGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loginUserGit = result.user;
                console.log(loginUserGit);
                setUser(loginUserGit);
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }

    const handleTwitterSignIn = () => {
        signInWithPopup(auth, twiterrProvider)
            .then(result => {
                const loginTwitterUser = result.user;
                console.log(loginTwitterUser);
                setUser(loginTwitterUser);
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <>
            <div className='w-50'>
                <div>
                    {user ?
                        <button onClick={handleSignOut}>Sign Out</button> :
                        <>
                            <button onClick={handleGoogleSignIn}>Login Google</button>
                            <button onClick={handleGitHub}>Login github</button>
                            <button onClick={handleTwitterSignIn}>Login Twitter</button>
                        </>
                    }
                    {user &&
                        <div>
                            <h3>User: {user.displayName}</h3>
                            <h4>Email : {user.email}</h4>
                        </div>
                    }
                </div>
                <div>
                    <Link to='/signup'><Button variant="primary">Sign Up</Button></Link>
                </div>
            </div>
        </>
    );
};

export default Login;