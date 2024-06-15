import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signUpToggler = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backgroundImage"/>
      </div>
      <form className='absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black text-white rounded-lg bg-opacity-85'>
        <h1 className='text-left text-3xl font-bold py-4 px-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder='Full Name' className='w-full p-3 m-2 rounded-md bg-gray-700' />}
        <input type="text" placeholder='Email Address' className='w-full p-3 m-2 rounded-md bg-gray-700' />
        <input type="text" placeholder='Password' className='w-full p-3 m-2 rounded-md bg-gray-700' />
        <button className='bg-red-700 p-3 m-2 w-full rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        {isSignIn && <h4 className='text-center p-3 m-2 w-full'>OR</h4>}
        {isSignIn && <button className='bg-gray-600 w-full p-3 m-2 rounded-md'>Use a sign-in code</button>}
        <p className='px-2 py-4'>{isSignIn ? "New to Netflix-GPT? " : "Already a user! "}<span className='underline cursor-pointer' onClick={signUpToggler}>{isSignIn ? "Sign Up Now." : "Sign In Now"}</span></p>
    </form>
    </div>
  )
}

export default Login