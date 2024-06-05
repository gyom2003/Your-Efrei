import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import React, { useState } from "react";
import './loginstyle.css';
import { Button } from "antd";
import {jsonData} from '../../data/loginData';
import { notification } from 'antd';

function LoginCompo() {
    const [usernameForm, setUsernameForm] = useState("")
    const [emailForm, setEmailForm] = useState("")
    const [mdpForm, setMdpForm] = useState("")
    const navigate = useNavigate();
    var loginToken = false;

    const onpenNotification = () => {
        notification.info({
            message: 'Success for your Login', 
            description:  `Hello, ${usernameForm}`, 
            duration: 3
        })
    }

    const handleLogin = () => {
        const identifiantsRef = jsonData.identifiants
        identifiantsRef.map(function(identifiant)  {
           const isLoginValid = usernameForm === identifiant.username && emailForm === identifiant.mail && mdpForm === identifiant.mot_de_passe
           if (isLoginValid) {
                const isProf = identifiant.isprof;
                loginToken = !loginToken<
                onpenNotification();
                return navigate("/yourefrei", {
                    state:{
                        loginTokenRef:loginToken, 
                        isProfRef:isProf
                        } })
           }
        }) 
    }

    return (
        <div className="positionLogin">
            <div className="globalLogin">
                <h2>Login</h2>
                <form>
                    <div className="formInput">
                        <input type="text" placeholder="Enter your name" value={usernameForm} onChange={e => setUsernameForm(e.target.value)} required/>
                    </div>
                    <div className="formInput">
                        <input type="text" placeholder="Enter your email" value={emailForm} onChange={e => setEmailForm(e.target.value)} required/>
                    </div>
                    <div className="formInput">
                        <input type="password" placeholder="Enter your password" value={mdpForm} onChange={e => setMdpForm(e.target.value)} required/>
                    </div>
                    <div>
                        <Button type="dashed" onClick={handleLogin}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginCompo;