import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/config";
export const useGoogleLogin = () => {
  const [ error, setError ] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async () => {
    setError(null)
    const provider = new GoogleAuthProvider();
    await signInWithRedirect( auth, provider)
        .then( result => {
            console.log(result)
            dispatch({type: 'LOGIN', payload: result.user})
        })
        .catch(err => {
            setError(err.message)
        });
  }

  return {
      error, login
  }

}