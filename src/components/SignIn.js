import React from 'react';
import { googleProvider } from '../AuthMethod';
import socialMediaAuth from '../Authentication';


export default function SignIn() {

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider)
        console.log(res);
    };


    return (
        <div>
        <button 
        style={{
            backgroundColor: 'lightGrey',
            borderRadius: '15px',
            color:'black'}}
        onClick={() => handleOnClick(googleProvider)}>Log in with Google</button>
        </div>
    );
}

