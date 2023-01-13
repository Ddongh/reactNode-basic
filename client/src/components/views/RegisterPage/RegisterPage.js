import React, { useState } from "react";
// import Axios from "axios";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";

function RegisterPage(propss) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onNameHandler =(event => {
      setName(event.currentTarget.value)
  })

  const onPasswordHandler =(event => {
    setPassword(event.currentTarget.value)
  })

  const onConfirmPasswordHandler =(event => {
    setConfirmPassword(event.currentTarget.value)
  })

  const onSubmitHander = (event) => {
      
    event.preventDefault();

    if(Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야합니다.")
    }
    
    let body = {
        email: Email,
        name: Name,
        password: Password
    }

    dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
              navigate("/login")
            } else {
              alert("Failed to sign up!!")
            }
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

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button type="submit">
                    회원가입
                </button>

            </form>
        </div>
  )
}

export default RegisterPage
// export default Auth(RegisterPage, false);
