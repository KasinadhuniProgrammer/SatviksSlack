import React from 'react'; 
import './Login.css'; 

import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase"; 

function Login() {
    
    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result); //for testing purposes
            })
            .catch(error => {
                alert(error.message)
            })

        


    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <h1>Welcome to Satviks Slack!</h1>
                <Button onClick={signIn}>Sign in with Google</Button>


            </div>
        </div>

    ); 
}

export default Login; 