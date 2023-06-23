import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';

import "./DevNavbar.css";

export default function DevNavbar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
  return (
    <div className='dev'>
        <h3>DEV LOGGED IN: {user.displayName}</h3>
        <ul>
            <li><Link to="/dev/upload" >Upload Images</Link></li>
            <li><Link to="/dev/edit" >Edit Images</Link></li>
            <li><button onClick={logout}>Logout</button></li>
        </ul>
    </div>
  )
}
