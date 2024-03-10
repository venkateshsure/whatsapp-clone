import React from "react";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../firebase";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../StateProvider";

import "./index.css";

function Login() {
  const [{},dispatch]=useStateValue()

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };  

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          alt="whatsApp"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <button onClick={signIn} type="button" className="sign-btn">
          Sign In With Google
        </button>
      </div>
    </div>
  );
}


export default Login;