import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();  // pull info


    const signIn = () => {
        //signing in
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                console.log(result.user);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img src="https://techcrunch.com/wp-content/uploads/2019/11/Facebook-Branding-GIF.gif" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

//continue from 3:05:50
