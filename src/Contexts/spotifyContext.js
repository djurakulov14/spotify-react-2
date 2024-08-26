import { createContext } from "react";


const spotify = createContext({
    CLIENT_ID: 'df740335f0be409ea3fc389380ca2f77',
    REDIRECT_URI: 'http://localhost:5173/',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token'
})




export default spotify