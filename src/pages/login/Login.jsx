
import {auth,provider} from "../../firebase-config"
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import "./login.css"

import React from 'react'

function Login({setIsAuth}) {
    let navigate = useNavigate();
    const singInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
            navigate("/")
        })
    }
  return (
    <div className="loginPage">
        <p>Sing In With Google to Continue</p>
        <button onClick={singInWithGoogle} className="login-with-google-btn">
            Sing in with Google
        </button>
    </div>
  )
}

export default Login
