import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '../../hooks/useGoogleLogin';

export default function Login() {
    const { login, error } = useGoogleLogin();
    const navigate = useNavigate();

    const handleClick = async () => {
      await login();

      if(!error){
        navigate("/");
      }
    }
  return (
    <div style={{margin: "1em"}}>
        <p>This page is reserved for the rightful owner of this site.</p>
        <p>Click <span onClick={() => navigate("/")} style={{cursor: "pointer", textDecoration: "underline"}}>Here</span> to redirect back to the home page.</p>
        <button 
          onClick={handleClick} 
          style={{
            marginTop: "4em", 
            border: "2px solid var(--primary-color)",
            padding: ".5em",
            color: "var(--primary-color)"
          }}
        >
          Login with Google
        </button>
        {error && <p>{error}</p>}
    </div>
  )
}
