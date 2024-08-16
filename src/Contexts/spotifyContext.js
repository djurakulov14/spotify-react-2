import { createContext } from "react";


const spotify = createContext({
    CLIENT_ID: 'f5b49fe53f204f9890362b3539064ad2',
    REDIRECT_URI: 'http://localhost:5173/',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token'
})


export default spotify