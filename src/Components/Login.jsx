import React, { useContext } from 'react';
import spotify from '../Contexts/spotifyContext';


const Login = () => {
    const {CLIENT_ID,REDIRECT_URI,AUTH_ENDPOINT,RESPONSE_TYPE} = useContext(spotify)

    return (
        <div className='login-page'>
            <div className="logo-spotify">
                <h1 className=' text-7xl'>LOG IN</h1>
            </div>
            <div className='redirect-block'>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}>
                <button className='log-in-btn'>Log in</button>
            </a>
            </div>
        </div>
    );
};


export default Login;