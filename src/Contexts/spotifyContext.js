import { createContext } from "react";


const spotify = createContext({
    CLIENT_ID: '046ce72f966442e69c6a92424f892da4',
    REDIRECT_URI: 'http://localhost:5173/',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token'
})


export default spotify