import { response } from "express";
import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from 'react-redux';

function LoginPage() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHander =(event => {
        setPassword(event.currentTarget.value)
    })

    const onSubmitHander = (event) => {
        event.preventDefault();
        
        let body = {
            email: Email,
            password: Password
        }

        Axios.post('api/users/login', body)
        .then(response => {

        })
    }

    return (
        <div 
        style={{display:'flex', justifyContent:'center', alignItems:'center'
        , width:'100%', height:'100vh'
        }}>
            <form 
            style={{display:'flex', flexDirection:'column'}}
            onSubmit={onSubmitHander}
            >
                <label>Email</label>
                <input type="eamil" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHander} />

                <br />
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    )
}

export default LoginPage
