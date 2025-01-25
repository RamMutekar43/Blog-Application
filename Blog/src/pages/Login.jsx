import React from "react";
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}){
    const navigate = useNavigate();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then(()=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/')
        })
    }
    return(

        
        <div className="place-items-center h-full">
            <img src="https://media.istockphoto.com/id/2189345609/vector/easter-bunny-rabbit-peeking-around-sign-cartoon.jpg?s=612x612&w=0&k=20&c=70MrQkbgz5ywTvHm7lpPSJjkgFQOhR7RnNDc4k0FheU=" alt="" 
            className="w-40 h-50 pt-16"/>
            <div className=" text-center pb-10 pt-5 w-5/12 mb-10">
                <p className=" text-amber-900 font-bold text-lg">Sign In With Google To Continue</p>
                <button className=" text-white font-bold h-12 w-48  rounded-lg bg-amber-900 px-2 mt-5" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login;