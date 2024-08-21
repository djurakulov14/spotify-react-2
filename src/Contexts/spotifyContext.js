import { createContext } from "react";


const spotify = createContext({
    CLIENT_ID: '9366a093ae6045079013cd025ea3ead5',
    REDIRECT_URI: 'https://spotifyyy-cloneee.netlify.app/',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token'
})


export default spotify