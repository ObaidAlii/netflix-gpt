import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className= "w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      { loggedInUser && 
        <div className='flex p-4'>
          <img className="w-10 h-10" src='https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfddCe1mY1WPO4pPZ5-MbjFE6nXvBkYUpYoIqLjBchPKWF6yNYA724Bem_ddFjnBtCB74WrqZLf1cIqUOzyAPSeStcPA5tM.png?r=e21' alt="user-icon"/>
          <div className='px-3'>
            <button className='bg-red-700 rounded-md h-10 font-bold text-white' onClick={signOutHandler}>Sign Out</button>
          </div>
        </div> 
      }
    </div>
  )
}

export default Header