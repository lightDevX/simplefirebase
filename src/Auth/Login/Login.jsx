import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
        <div>
            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Login Google</button>
                    <button onClick={handleGitHub}>Login github</button>
                </>
            }
            {user &&
                <div>
                    <h3>User: {user.displayName}</h3>
                    <h4>Email : {user.email}</h4>
                </div>
            }
        </div>
    );
};

export default Login;